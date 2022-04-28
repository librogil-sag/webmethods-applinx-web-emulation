import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Position, MultipleOptionsTransformation, InputField, Field, Cursor } from '@softwareag/applinx-rest-apis';
import { GridPosition } from 'src/app/services/navigation/tab-and-arrows.service';

import {NavigationService} from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-multiple-options',
  templateUrl: './multiple-options.component.html',
  styleUrls: ['./multiple-options.component.css']
})
export class MultipleOptionsComponent implements OnChanges {

  @Input() transform: MultipleOptionsTransformation;
  inputField: InputField;

  constructor(private navigationService: NavigationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const field: Field = changes.transform.currentValue.field;
    this.inputField = new InputField();
    if (field.name?.length > 0) {
      this.inputField.setName(field.name);
    }
    if (field.multiple || typeof field.occurrenceIndex === 'number') {
      this.inputField.setIndex(field.index || field.occurrenceIndex);
    }
    this.inputField.setValue(field.content);
    if (field.position) {
      this.inputField.setPosition(field.position);
    }
  }

  getItemsKeys(arr: any[]): string[] {
    const keys = [];
    for (let i = 0; i < arr.length; i++) {
      keys.push(arr[i].key);
    }
    return keys;
  }

  getLongestString(strings: string[]): number {
    let lgth = 0;
    let longest;

    for (let i = 0; i < strings.length; i++){
      if (strings[i].length > lgth){
        lgth = strings[i].length;
        longest = strings[i];
      }
    }
    return longest.length;
  }

  onSelect(value: any): void{
    this.inputField.setValue(value);
    this.navigationService.setSendableField(this.inputField);
  }

  onFocus(eventTarget: any): void {
    let matrixPosition: Position;
    if (eventTarget && eventTarget.type === 'radio') {
      const gp = new GridPosition(eventTarget);
      matrixPosition = {row: gp.rowStart, column: gp.colStart};
    }
    this.navigationService.setCursorPosition(new Cursor(this.inputField.position, this.inputField.name, this.inputField.index), matrixPosition);
  }
}
