import { HttpErrorResponse } from '@angular/common/http';
import { CreateSessionResponse, CreateSessionRequest, GetScreenRequest, SendKeysRequest, GetScreenResponse } from '@softwareag/applinx-rest-apis';
import { AbstractUserExits } from './AbstractUserExits';

export class LifecycleUserExits extends AbstractUserExits {
        
    preConnect(createSessionRequest: CreateSessionRequest, authHeader?: string) {
        super.preConnect(createSessionRequest, authHeader);
    }
    postConnect(createSessionRespose: CreateSessionResponse) {
        super.postConnect(createSessionRespose);
    }
    onConnectError(errorResponse: HttpErrorResponse) {
        super.onConnectError(errorResponse);
    }

    preGetScreen(getScreenRequest: GetScreenRequest) {
        super.preGetScreen(getScreenRequest);
    }
    postGetScreen(getScreenResponse: GetScreenResponse) {
        super.postGetScreen(getScreenResponse);
    }
    onGetScreenError(errorResponse: HttpErrorResponse) {
        super.onGetScreenError(errorResponse);
    }

    preSendKey(sendKeysRequest: SendKeysRequest) {
        super.preSendKey(sendKeysRequest);
    }
    postSendKey(sendKeysResponse: any) {
        super.postSendKey(sendKeysResponse);
    }
    onSendKeyError(errorResponse: HttpErrorResponse) {
        super.onSendKeyError(errorResponse);
    }

    preDisconnect() {
        super.preDisconnect();
    }
    postDisconnect(disconnectSessionRespose: CreateSessionResponse) {
        super.postDisconnect(disconnectSessionRespose);
    }
    onDisconnectError(errorResponse: HttpErrorResponse) {
        super.onDisconnectError(errorResponse);
    }

    afterViewInit() {
        super.afterViewInit();
        // Set content to unprotected field.     
        // this.navigationService.fillInput('<id>', '<value>');

        // Add KeyboardMapping.
        // this.addKeyboardMapping(GXAdditionalKey.NONE, GXKeyCodes.F4, () => alert(`Hello world`), true);
    }
}