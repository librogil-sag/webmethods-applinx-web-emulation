import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
@Injectable({
  providedIn: 'root'
})
export class MessagesService implements OnInit{
 
  public static messages: Map<string, string>;
 
  constructor(private httpClient: HttpClient, private logger: NGXLogger ) {
    this.ngOnInit();    
  }
  ngOnInit(): void {
    MessagesService.messages = new Map<string, string>();
    this.getJSON().subscribe(data => {
      for(let key in data){
        MessagesService.messages.set(key, data[key]);
       }        
      });
  }

  get(key: string): string{
    return MessagesService.messages.get(key);
  }

  private getJSON(): Observable<any> {
    return this.httpClient.get("./assets/messages/messages.json");
  }
}

