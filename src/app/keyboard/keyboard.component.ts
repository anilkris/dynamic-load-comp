import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit, AdComponent {

  NUMBER_KEYS = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-', '+', '<-'];
  QWERTY_KEYS = ['->|', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']','\\'];
  ASDF_KEYS = ['CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', ';', '\'','Enter'];
  ZXCV_KEYS = ['SHIFT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '?', '<','>'];
  SPACE_KEY = [];
  @Input() data: any;
  constructor() { }
  ngOnInit(): void {
  }

  onClick(event) {
    this.data.elementRef.nativeElement.value = 'akshay';
  }


}
