import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetScreenResponse } from '@softwareag/applinx-rest-apis'
@Injectable({
  providedIn: 'root'
})
export class ScreenHolderService {

  private _runtimeScreen: GetScreenResponse;
  private _previousScreen: any;
  public screenInitialized: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public setRuntimeScreen(screen: GetScreenResponse): void {
    this._previousScreen = this._runtimeScreen;
    this._runtimeScreen = screen;
  }
  public getRuntimeScreen(): GetScreenResponse {
    return this._runtimeScreen;
  }
  public getRuntimeScreenName(): string {
    return this._runtimeScreen ? (this._runtimeScreen.name || '') : null;
  }
  public setPreviousScreen(screen: any): void {
    this._previousScreen = screen;
  }
  public getPreviousScreen(): any {
    return this._previousScreen;
  }
  public isCurrentScreenWindow(): boolean {
    return this._runtimeScreen.windows?.length > 0;
  }
}
