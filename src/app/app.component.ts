import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { HeoJobAdComponent } from './heo-job-ad/heo-job-ad.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ads: AdItem[];

  constructor() {}

  ngOnInit() {
    this.ads = this.getAds();
  }

  getAds() {
    return [
      new AdItem(HeoJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!'
      }),
    ];
  }

}
