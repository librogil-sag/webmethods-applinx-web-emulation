import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { LineTransformation, Field, Position } from '@softwareag/applinx-rest-apis';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, OnChanges {

  @Input() transform: LineTransformation;
  field: Field;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const lineTransform: LineTransformation = changes.transform.currentValue;
    if (lineTransform.caption.text) {
      this.field = new Field();
      this.field.position = new Position(lineTransform.position.row, lineTransform.position.column);
      this.field.content = lineTransform.caption.text;
      this.field.visible = true;
      this.field.protected = true;
    }
  }

}
