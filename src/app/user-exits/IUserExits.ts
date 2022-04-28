import { HttpErrorResponse } from "@angular/common/http";
import { GetScreenRequest, GetScreenResponse, CreateSessionRequest, SendKeysRequest, CreateSessionResponse } from "@softwareag/applinx-rest-apis";

export interface IUserExits {
    
    /**
     * Occurs before and after connecting a session with host through LoginComponent.onConnect()
     */
    preConnect(createSessionRequest: CreateSessionRequest, authHeader?: string);
    postConnect(createSessionRespose: CreateSessionResponse);
    onConnectError(errorResponse: HttpErrorResponse);

    /**
     * Occurs before and after getting host screen through ScreenComponent.getScreen()
     */
    preGetScreen(getScreenRequest: GetScreenRequest);
    postGetScreen(GetScreenResponse: GetScreenResponse);
    onGetScreenError(errorResponse: HttpErrorResponse);

    /**
     * Occurs before and after updating host screen through NavigationService.sendKeys(sendKey: string)
     */
    preSendKey(sendKeysRequest: SendKeysRequest);
    postSendKey(sendKeysResponse: any);
    onSendKeyError(errorResponse: HttpErrorResponse);
    
    /**
     * Occurs before and after disconnecting a session with host.
     */
    preDisconnect();
    postDisconnect(disconnectSessionRespose: CreateSessionResponse);
    onDisconnectError(errorResponse: HttpErrorResponse);
      
    /**
     * Occurs after screen fully initialized in the DOM.
     */
    afterViewInit();
}