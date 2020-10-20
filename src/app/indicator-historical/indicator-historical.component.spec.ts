import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorHistoricalComponent } from './indicator-historical.component';

describe('IndicatorHistoricalComponent', () => {
  let component: IndicatorHistoricalComponent;
  let fixture: ComponentFixture<IndicatorHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
