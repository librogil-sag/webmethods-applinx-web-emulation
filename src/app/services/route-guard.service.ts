import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GXUtils } from 'src/utils/GXUtils';
import { CreateSessionResponse } from '@softwareag/applinx-rest-apis';
import { ConfigurationService } from './configuration.service';
import { KeyboardMappingService } from './keyboard-mapping.service';
import { MessagesService } from './messages.service';
import { OAuth2HandlerService } from './oauth2-handler.service';
import { ScreenHolderService } from './screen-holder.service';
import { StorageService } from './storage.service';
import { UserExitsEventThrowerService } from './user-exits-event-thrower.service';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private storageService: StorageService, 
    private screenHolderService: ScreenHolderService,
    private oAuth2handler: OAuth2HandlerService,
    private configurationService: ConfigurationService,
    private keyboardMappingService: KeyboardMappingService,
    private userExitsEventThrower: UserExitsEventThrowerService, private logger: NGXLogger, private messages: MessagesService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.storageService.isConnected();
    const screenName = this.screenHolderService.getRuntimeScreenName();
    const url = GXUtils.removeSlash(state.url);
    const idPcode = route.queryParams.code; // OpenIDConnect auth code.
    if (isLoggedIn && (url === 'instant' || url === screenName)) {
      return true;
    } else if (idPcode) {
      if (url === 'login') {
        this.router.navigate(['instant', { queryParams: route.queryParams }]);
        return true;
      }
      return this.configurationService.getConfigObservable()
      .pipe(
        mergeMap((config) => {
          return this.oAuth2handler.sendCodeAndConnectSession(idPcode, config.applicationName, config.connectionPool).pipe(
            catchError((err) => {
              this.logger.error(this.messages.get("ERROR_WHEN_SENDING_OATH@_CODE_TO_APX_REST_API"));
              this.userExitsEventThrower.fireOnConnectError(err);
              return of(false);
            }),
            map((res: CreateSessionResponse) => {
              this.logger.debug(this.messages.get("SESSION_CONNECTED_SUCCESSFULLY_VIA_OPENID_CONNECT"));
              this.storageService.setConnected(res.token); 
              this.keyboardMappingService.initMapping(res.keyboardMapping);
              this.userExitsEventThrower.firePostConnect(res);                
              return true;
            })
          );
        })
      )
    } else if (url === 'login' && !idPcode) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false; 
    }
  }
  
}