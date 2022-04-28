import {Component, Input} from '@angular/core';
import {AbstractTransformation} from '@softwareag/applinx-rest-apis';

@Component({
  selector: 'app-transform-generator',
  templateUrl: './transform-generator.component.html',
  styleUrls: ['./transform-generator.component.css']
})
export class TransformGeneratorComponent  {

  @Input() transformations: AbstractTransformation[];

  constructor() { }

}
