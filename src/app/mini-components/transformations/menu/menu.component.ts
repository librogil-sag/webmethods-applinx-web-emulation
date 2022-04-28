import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { MenuTransformation, Field, Position, InputField } from '@softwareag/applinx-rest-apis';

import {NavigationService} from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnChanges {

  @Input() transform: MenuTransformation;
  field: Field;

  constructor(private navigationService: NavigationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const inputPosition = changes.transform.currentValue.inputPosition;
    this.field = new Field();
    this.field.setPosition(new Position(inputPosition.row, inputPosition.column));
  }

  onClick(actionValue: any): void {
    const inputField = new InputField();
    inputField.setPosition(new Position(this.field.position.row, this.field.position.column));
    inputField.setValue(actionValue);
    this.navigationService.setSendableField(inputField);
    this.navigationService.sendKeys('[enter]');
  }

  onInputValueChange(inputField: InputField): void{
    this.navigationService.setSendableField(inputField);
  }

}
