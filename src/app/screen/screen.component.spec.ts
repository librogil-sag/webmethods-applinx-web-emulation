import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenComponent } from './screen.component';
import { ApiModule,SessionService } from '@softwareag/applinx-rest-apis';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { LoggerConfig, NGXLogger } from 'ngx-logger';
import { ScreenLockerService } from 'src/app/services/screen-locker.service'
import { DatePipe } from '@angular/common';
import { MessagesService } from 'src/app/services/messages.service'
import { RouterTestingModule } from '@angular/router/testing';
import { IJSFunctionService } from 'src/common/js-functions/ijs-functions.service'
import { JSFunctionsService } from 'src/common/js-functions/js-functions.service'



describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [ScreenComponent],
            imports: [
              HttpClientModule,
			    RouterTestingModule,
				ApiModule
            ],
            providers: [
				SessionService,
				NavigationService,
				NGXLogger,
				ScreenLockerService,
				DatePipe,
				LoggerConfig, 
				{provide: 'IJSFunctionService', useClass: JSFunctionsService}
            ]
        } )
        .compileComponents();
    } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
