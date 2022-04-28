import { Injectable } from "@angular/core";
import { IJSFunctionService } from './ijs-functions.service';

@Injectable( {
    providedIn: 'root'
} )
export class JSFunctionsService implements IJSFunctionService {
    
    constructor() {
    }

    go():void{
        console.debug("boo");
    }
}