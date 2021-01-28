import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEdtComponent } from './shopping-edt.component';

describe('ShoppingEdtComponent', () => {
  let component: ShoppingEdtComponent;
  let fixture: ComponentFixture<ShoppingEdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingEdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
