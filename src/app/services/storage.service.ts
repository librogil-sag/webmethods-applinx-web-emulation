import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Language } from '@softwareag/applinx-rest-apis';
import { MessagesService } from './messages.service';
import { ScreenHolderService } from './screen-holder.service';

// A service which is perpose is to store basic information that should be accessible across the entire application.
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private language: Language;
  public static injector: Injector;

  constructor(private screenHolderService: ScreenHolderService,
              private logger: NGXLogger, private router: Router, private messages: MessagesService) {
                sessionStorage.clear();
              }

  isConnected(): boolean {
    if (sessionStorage.getItem('gx_token')) {
      return true;
    }
    return false;
  }
  setConnected(authToken: string): void {
    sessionStorage.setItem('gx_token', authToken);
    this.logger.setCustomHttpHeaders(
      new HttpHeaders({ "Authorization": this.getAuthToken() })
    );
    this.router.navigate(['instant']);
  }
  setNotConnected(): void {
    this.logger.debug(this.messages.get("SESSION_DISCONNECTED"));
    sessionStorage.removeItem('gx_token');
    this.screenHolderService.setRuntimeScreen(null);
    this.router.navigate(['login']);
  }
  getAuthToken(): string {
    return 'Bearer ' + sessionStorage.getItem('gx_token');
  }
  setLanguage(lang: Language): void {
    this.language = lang;
  }
  getLanguage(): Language {
    return this.language;
  }
}
