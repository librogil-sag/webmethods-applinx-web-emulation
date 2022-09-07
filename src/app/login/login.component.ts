import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {StorageService} from '../services/storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { KeyboardMappingService } from '../services/keyboard-mapping.service';
import { ScreenLockerService } from '../services/screen-locker.service';
import { ConfigurationService } from '../services/configuration.service';
import { OAuth2HandlerService } from '../services/oauth2-handler.service';
import { GXConst } from '../services/enum.service';
import { CreateSessionResponse,GetInfoResponse,
  CreateSessionRequest, InfoService, SessionService  } from '@softwareag/applinx-rest-apis';
import { UserExitsEventThrowerService } from '../services/user-exits-event-thrower.service';
import { NGXLogger } from 'ngx-logger';
import { MessagesService } from '../services/messages.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  authMethod: string;
  errorMessage: string;
  version: string;

  constructor(private sessionService: SessionService, private infoService: InfoService, 
    private storageService: StorageService, private keyboardMappingService: KeyboardMappingService,
    private screenLockerService: ScreenLockerService, private userExitsEventThrower: UserExitsEventThrowerService,
    private configurationService: ConfigurationService, private oAuth2handler: OAuth2HandlerService, private logger: NGXLogger, private messages: MessagesService) {}

  ngOnInit(): void {
    this.logger.debug(this.messages.get("INITIALZING_LOGIN_PAGE"));
    if (!this.screenLockerService.isLocked()) {
    		  this.screenLockerService.setLocked(true); // Lock login screen until finish initilizing.
    }
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      newPassword: new FormControl(''),
    });

    this.infoService.getInfo().subscribe((response: GetInfoResponse) => {
      const authProviders: string[] = [GXConst.APPLINX, GXConst.LDAP, GXConst.OPEN_ID_CONNECT, GXConst.NATURAL, GXConst.DISABLED];
      if (!authProviders.includes(response.auth)) {
        this.logger.warn(`'${response.auth}' isn't a valid authentication method. REST API auth method should be specified. Using 'applinx' authentication by default.`);
        this.authMethod = GXConst.APPLINX;
      } else {
        this.authMethod = response.auth;
      }
      this.version = response.version;
      this.keyboardMappingService.initMapping(response.keyboardMapping);       
      this.screenLockerService.setLocked(false); // Unlock screen after finished initizling. 
    });
  }

  onConnect() {
    this.logger.debug(this.messages.get("CONNECTING"));
    this.errorMessage = '';
    const isConnectButtonDisabled = $('#connect').prop('disabled');
    if (this.storageService.isConnected() || isConnectButtonDisabled) {
      return;
    }
    this.screenLockerService.setLocked(true);  

    if (this.authMethod === GXConst.OPEN_ID_CONNECT) {
      this.oAuth2handler.redirectToIDPLoginPage();
    } else {
      this.handleSimpleAuth();
    }
    this.form.reset();
    this.username.setValue('');
    this.password.setValue('');
    this.newPassword.setValue('');
  }

  handleSimpleAuth() {
    if (!this.username.value && this.authMethod !== GXConst.DISABLED) {
      return;
    }

    const conf = this.configurationService;
    const createSessionRequest = new CreateSessionRequest(conf.applicationName, conf.connectionPool);
    if (this.configurationService.sessionOptions) {
      createSessionRequest.options = Object.assign(createSessionRequest.options, this.configurationService.sessionOptions);
    }
    createSessionRequest.sessionDescription = 'REST API Session';  
    let authHeader: string;
    if (this.authMethod === GXConst.NATURAL){
      createSessionRequest.naturalUsername = this.username.value;
      createSessionRequest.naturalPassword = this.password.value;
      createSessionRequest.naturalNewPassword = this.newPassword.value;
    } else if (this.authMethod === GXConst.APPLINX || this.authMethod === GXConst.LDAP) {
      authHeader = 'Basic ' + btoa(unescape(encodeURIComponent(this.username.value + ':' + this.password.value)));
    }
    
    this.userExitsEventThrower.firePreConnect(createSessionRequest, authHeader);
    this.sessionService.connect(createSessionRequest, authHeader).subscribe((res: CreateSessionResponse)  => {
      this.storageService.setConnected(res.token);
      this.keyboardMappingService.initMapping(res.keyboardMapping);
      this.userExitsEventThrower.firePostConnect(res); 
    }, (errorResponse: HttpErrorResponse) => {
      this.handleError(errorResponse);
      this.userExitsEventThrower.fireOnConnectError(errorResponse);
    });
  }

  handleError(errorResponse: HttpErrorResponse): void {
    this.screenLockerService.setLocked(false);
    const msg = errorResponse.error.message || errorResponse.message;
    this.errorMessage = msg;
    console.error(msg);
  }

  /* FormGroup's getters */
  get username(): AbstractControl { return this.form.get('username'); }
  get password(): AbstractControl { return this.form.get('password'); }
  get newPassword(): AbstractControl { return this.form.get('newPassword'); }
}