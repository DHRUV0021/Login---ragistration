import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSliderComponent } from './small-slider.component';

describe('SmallSliderComponent', () => {
  let component: SmallSliderComponent;
  let fixture: ComponentFixture<SmallSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
