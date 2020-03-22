import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit, AdComponent {

  @Input() data: any;
  constructor() { }
  ngOnInit(): void {
  }

  onClick(event) {

    this.data.elementRef.nativeElement.value = 'akshay';

  }


}
