import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicartorsListComponent } from './indicartors-list.component';

describe('IndicartorsListComponent', () => {
  let component: IndicartorsListComponent;
  let fixture: ComponentFixture<IndicartorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicartorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicartorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
