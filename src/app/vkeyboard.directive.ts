import { Directive, Input, ElementRef, HostListener, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad-component';
import { AdItem } from './ad-item';
import { HeoJobAdComponent } from './heo-job-ad/heo-job-ad.component';
import { AdService } from './ad.service';

@Directive({
  selector: '[vkeyboard]'
})
export class VkeyboardDirective {
 adItem = new AdItem(HeoJobAdComponent, {
        headline: 'Item3',
        body: 'Submit now '
    });


  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  interval: any;
  @Input() vkeyboardData: string;
  constructor(public viewContainerRef: ViewContainerRef, private elementRef: ElementRef,
              private adService: AdService) {
  }

  @HostListener('focus', ['$event'])
  openKeyboard() {

    this.adService.pushAd(this.adItem);
    this.elementRef.nativeElement.value = 'akshay';

  }

  @HostListener('blur', ['$event'])
  private closeKeyboard() {
    this.elementRef.nativeElement.value = '';
    this.adService.deleteAd();
  }


}
