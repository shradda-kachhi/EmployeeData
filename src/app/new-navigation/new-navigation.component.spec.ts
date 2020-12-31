import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNavigationComponent } from './new-navigation.component';

describe('NewNavigationComponent', () => {
  let component: NewNavigationComponent;
  let fixture: ComponentFixture<NewNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
