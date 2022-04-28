import { HttpErrorResponse } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { InfoService } from '@softwareag/applinx-rest-apis'
import { CreateSessionRequest, CreateSessionResponse, GetScreenRequest, SendKeysRequest, GetScreenResponse } from '@softwareag/applinx-rest-apis';
import { KeyboardMappingService } from 'src/app/services/keyboard-mapping.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { StorageService } from 'src/app/services/storage.service';
import { IUserExits } from './IUserExits';
import { StatusCodes } from 'http-status-codes';

export abstract class AbstractUserExits implements IUserExits {

    

    constructor(
				private infoService: InfoService,
				private navigationService: NavigationService,
				private storageService: StorageService,
				private keyboardMappingService: KeyboardMappingService,
				private logger: NGXLogger ) {
    }

    preConnect(createSessionRequest: CreateSessionRequest, authHeader?: string) {
        // empty impl. to allow overriding specific methods
    }
    postConnect(createSessionRespose: CreateSessionResponse) {
        // empty impl. to allow overriding specific methods
    }
    onConnectError(errorResponse: HttpErrorResponse) {
        this.logger.error(errorResponse);
    }

    preGetScreen(getScreenRequest: GetScreenRequest) {
        // empty impl. to allow overriding specific methods
    }
    postGetScreen(GetScreenResponse: GetScreenResponse) {
        // empty impl. to allow overriding specific methods
    }
    onGetScreenError(errorResponse: HttpErrorResponse) {
        this.logger.error(errorResponse);
        if (errorResponse.status === StatusCodes.GONE) {
            this.storageService.setNotConnected();
        }
    }

    preSendKey(sendKeysRequest: SendKeysRequest) {
        // empty impl. to allow overriding specific methods
    }
    postSendKey(sendKeysResponse: any) {
        // empty impl. to allow overriding specific methods
    }
    onSendKeyError(errorResponse: HttpErrorResponse) {
        // handle screen id mismatch if occured.
        this.navigationService.handleScreenIdMismatch(errorResponse);
        if (errorResponse.status === StatusCodes.GONE) {
            this.storageService.setNotConnected();
        }
    }

    preDisconnect() {
        // empty impl. to allow overriding specific methods
    }
    postDisconnect(disconnectSessionRespose: CreateSessionResponse) {
        // empty impl. to allow overriding specific methods
    }
    onDisconnectError(errorResponse: HttpErrorResponse) {
        this.logger.error(errorResponse);
    }

    afterViewInit() {
        // empty impl. to allow overriding specific methods
    }

    protected addKeyboardMapping(additionalKey: string, keyCode: string, functionElement: any, overrideExisting: boolean, cancelMapFunction?: any) {
        this.keyboardMappingService.addKeyboardMapping(additionalKey, keyCode, functionElement, overrideExisting, cancelMapFunction);
    }
}