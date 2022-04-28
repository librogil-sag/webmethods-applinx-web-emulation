import { Component, Input } from '@angular/core';
import {TableTransformation, InputField} from '@softwareag/applinx-rest-apis';
import {NavigationService} from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() transform: TableTransformation;

  constructor(private navigationService: NavigationService) { }

  onInputValueChange(inputField: InputField): void {
    this.navigationService.setSendableField(inputField);
  }
}
