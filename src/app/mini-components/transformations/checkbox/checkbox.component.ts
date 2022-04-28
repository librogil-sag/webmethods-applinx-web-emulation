import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CheckboxTransformation, InputField, Cursor } from '@softwareag/applinx-rest-apis';
import {NavigationService} from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnChanges {

  @Input() transform: CheckboxTransformation;
  inputField: InputField;

  constructor(private navigationService: NavigationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const field = changes.transform.currentValue.field;
    this.inputField = new InputField();
    this.inputField.setName(field.name);
    this.inputField.setValue(field.content);
    this.inputField.setPosition(field.position);
    this.inputField.setIndex(field.index);
  }

  onSelect(event: any): void {
    if (event.target.checked) {
      this.inputField.setValue(this.transform.checkedValue);
    } else {
      this.inputField.setValue(this.transform.uncheckedValue);
    }
    this.navigationService.setSendableField(this.inputField);
  }

  onFocus(): void {
    this.navigationService.setCursorPosition(new Cursor(this.inputField.position, this.inputField.name, this.inputField.index));
  }
}
