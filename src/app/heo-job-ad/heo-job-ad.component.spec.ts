import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoJobAdComponent } from './heo-job-ad.component';

describe('HeoJobAdComponent', () => {
  let component: HeoJobAdComponent;
  let fixture: ComponentFixture<HeoJobAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeoJobAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeoJobAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
