import { Injectable } from "@angular/core";
import { popup } from 'src/assets/JSfunctions/scripts';
import { IJSFunctionService } from './ijs-functions.service';

@Injectable( {
    providedIn: 'root'
} )

export class JSMethodsService implements IJSFunctionService {
    
    constructor() {
    }
    
    go(str: string):void{
        alert(str);
    }

    jo(str: string):void{
        console.debug(str);
    }
}