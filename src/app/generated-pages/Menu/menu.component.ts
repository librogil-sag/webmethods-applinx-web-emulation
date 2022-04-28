import { Menu } from './menu.model'
import { Component } from '@angular/core';
import { GXGeneratedPage } from '../GXGeneratedPage'
// import { GetScreenRequest, SendKeysRequest, GetScreenResponse } from '../../../model/models';
import { GXAdditionalKey, GXKeyCodes } from '../../services/enum.service';
import { LifecycleUserExits } from '../../user-exits/LifecycleUserExits';
declare var $: any;

@Component({
  selector: 'gx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent1 extends GXGeneratedPage {

  constructor() {
    super(Menu);
	// Uncomment the following line to add user exits for the current page.
    // this.addUserExits(new MenuComponent.PageLifecycle());

    // Access or change runtime(host) screen and screen model(designtime screen).
    // this.runtimeScreen.fields.forEach(f => console.log(f.name));
    // this.screenModel.fields.forEach(f => console.log(f.name));
  }

  //Uncomment the following lines to add user exits for the current page.
  // static PageLifecycle = class extends LifecycleUserExits {

  //   preGetScreen(getScreenRequest: GetScreenRequest) {
  //     // super.preGetScreen(getScreenRequest);
  //   }
  //   postGetScreen(GetScreenResponse: GetScreenResponse) {}

  //   preSendKey(sendKeysRequest: SendKeysRequest) {}
  //   postSendKey(sendKeysResponse: any) {}

  //   afterViewInit() {
  //     // Here you can manipulate the DOM after the page view fully initialized.

  //     // Set content to unprotected fields by element id:
  //     // this.navigationService.fillInput('<id>', '<value>');
      
  //     // Use JavaScript to style the DOM:
  //     // const htmlScreenArea: HTMLElement = document.getElementById('gx_screenArea');
  //     // htmlScreenArea.style.backgroundColor = 'red'; // change screen background to red.

  //     // Add KeyboardMapping.
  //     // this.addKeyboardMapping(GXAdditionalKey.NONE, GXKeyCodes.F4, () => alert(`Hello world`), true);   
  //   }
  // }
}

