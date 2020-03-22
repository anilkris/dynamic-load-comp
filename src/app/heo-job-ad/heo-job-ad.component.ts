import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-heo-job-ad',
  templateUrl: './heo-job-ad.component.html',
  styleUrls: ['./heo-job-ad.component.scss']
})
export class HeoJobAdComponent implements AdComponent {

  constructor() { }
  @Input() data: any;

}
