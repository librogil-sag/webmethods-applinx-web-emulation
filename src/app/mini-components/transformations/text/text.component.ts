import {Component, Input, OnInit} from '@angular/core';
import {TextTransformation} from '@softwareag/applinx-rest-apis';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() transform: TextTransformation;

  constructor() { }

  ngOnInit(): void {
  }

}
