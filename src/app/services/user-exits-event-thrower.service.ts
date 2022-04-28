import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { CreateSessionRequest, CreateSessionResponse, GetScreenRequest, GetScreenResponse, SendKeysRequest } from '@softwareag/applinx-rest-apis';
import { IUserExits } from '../user-exits/IUserExits';

@Injectable({
  providedIn: 'root'
})
export class UserExitsEventThrowerService {
  
  private _userExitsList: IUserExits[] = [];

  public clearEventListeners(): void {
    this._userExitsList = [];
  }

  public addEventListener(userExits: IUserExits) {
    this.userExitsList.push(userExits);
  }

  public get userExitsList(): IUserExits[] {
    return this._userExitsList ?? [];
  }

  public firePreConnect(createSessionRequest: CreateSessionRequest, authHeader?: string) {
    this.userExitsList.forEach(u => u.preConnect(createSessionRequest, authHeader));
  }
  public firePostConnect(createSessionResponse: CreateSessionResponse) {
    this.userExitsList.forEach(u => u.postConnect(createSessionResponse));
  }
  public fireOnConnectError(errorResponse: HttpErrorResponse) {
    this.userExitsList.forEach(u => u.onConnectError(errorResponse));
  }

  public firePreGetScreen(getScreenRequest: GetScreenRequest) {
    this.userExitsList.forEach(u => u.preGetScreen(getScreenRequest));
  }
  public firePostGetScreen(getScreenResponse: GetScreenResponse) {
    this.userExitsList.forEach(u => u.postGetScreen(getScreenResponse));
  }
  public fireOnGetScreenError(errorResponse: HttpErrorResponse) {
    this.userExitsList.forEach(u => u.onGetScreenError(errorResponse));
  }

  public firePreSendKey(sendKeysRequest: SendKeysRequest) {
    this.userExitsList.forEach(u => u.preSendKey(sendKeysRequest))
  }
  public firePostSendKey(sendKeysResponse: any) {
    this.userExitsList.forEach(u => u.postSendKey(sendKeysResponse));
  }
  public fireOnSendKeyError(errorResponse: HttpErrorResponse) {
    this.userExitsList.forEach(u => u.onSendKeyError(errorResponse));
  }

  public firePreDisconnect() {
    this.userExitsList.forEach(u => u.preDisconnect());
  }
  public firePostDisconnect(disconnectSessionResponse: any) {
    this.userExitsList.forEach(u => u.postDisconnect(disconnectSessionResponse));
  }
  public fireOnDisconnectError(errorResponse: HttpErrorResponse) {
    this.userExitsList.forEach(u => u.onDisconnectError(errorResponse));
  }

  public fireAfterViewInit() {
    setTimeout(() => this.userExitsList.forEach(u => u.afterViewInit()))
  }
}
