import { Directive, Input, ElementRef, HostListener, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad-component';
import { AdItem } from './ad-item';
import { HeoJobAdComponent } from './heo-job-ad/heo-job-ad.component';
import { AdService } from './ad.service';
import { KeyboardComponent } from './keyboard/keyboard.component';

@Directive({
  selector: '[vkeyboard]'
})
export class VkeyboardDirective {

  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  interval: any;
  @Input() vkeyboardData: string;
  constructor(public viewContainerRef: ViewContainerRef, private elementRef: ElementRef,
              private adService: AdService) {
  }

  @HostListener('focus', ['$event'])
  openKeyboard() {
   const  adItem = new AdItem(KeyboardComponent, {
       elementRef: this.elementRef,
        headline: 'Item3',
        body: 'Submit now '
    });


    this.adService.pushAd(adItem);

  }

  @HostListener('blur', ['$event'])
  private closeKeyboard() {
   // this.adService.deleteAd();
  }


}
