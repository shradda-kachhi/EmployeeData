import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescipieStartComponent } from './rescipie-start.component';

describe('RescipieStartComponent', () => {
  let component: RescipieStartComponent;
  let fixture: ComponentFixture<RescipieStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescipieStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescipieStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
