import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from '../../services/navigation/navigation.service';
import {HostKeyTransformation} from '@softwareag/applinx-rest-apis';

@Component({
  selector: 'app-host-keys-template',
  templateUrl: './host-keys-template.component.html',
  styleUrls: ['./host-keys-template.component.css']
})
export class HostKeysTemplateComponent implements OnInit {

  @Input() transformations: HostKeyTransformation[];

  constructor(public navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  onClick(actionValue: string): void {
    this.navigationService.sendKeys(actionValue);
  }
}
