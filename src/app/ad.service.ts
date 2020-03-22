import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeoJobAdComponent } from './heo-job-ad/heo-job-ad.component';
import { of } from 'rxjs/internal/observable/of';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private source = new Subject<AdItem[]>();

  data$ = this.source.asObservable();

  ads: AdItem[] = [];


 constructor() {
   }

   next(data: AdItem[]) {
    this.source.next(data);
  }

  getAds() {
    return of(this.ads);
  }
  pushAd(adItem: AdItem) {
    this.ads.push(adItem);
    this.next(this.ads);

  }
  deleteAd() {
    this.ads = [];
    this.next(this.ads);
  }
}
