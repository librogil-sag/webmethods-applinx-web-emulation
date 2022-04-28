import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ApiModule,SessionService,InfoService } from '@softwareag/applinx-rest-apis';
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { ScreenLockerService } from 'src/app/services/screen-locker.service'
import { DatePipe } from '@angular/common';
import { LoggerConfig } from 'ngx-logger'
import { MessagesService } from 'src/app/services/messages.service'
import { IJSFunctionService } from 'src/common/js-functions/ijs-functions.service'
import { JSFunctionsService } from 'src/common/js-functions/js-functions.service'
import { StorageService } from 'src/app/services/storage.service';
import { LifecycleUserExits } from 'src/app/user-exits/LifecycleUserExits';
import { UserExitsEventThrowerService } from './services/user-exits-event-thrower.service';

describe('AppComponent', () => {
	
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ApiModule,
        HttpClientModule
		],
      declarations: [
        AppComponent
      ],
	  providers: [
		SessionService,
		NavigationService,
		LoggerTestingModule,
		ScreenLockerService,
		DatePipe,
		StorageService,
		UserExitsEventThrowerService,
		LifecycleUserExits,	
		InfoService,
    {provide: LoggerConfig, useClass: class {}},
		{provide: 'IJSFunctionService', useClass: JSFunctionsService}
		
	  ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ApplinX-Framework'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ApplinX-Framework');
  });

});
