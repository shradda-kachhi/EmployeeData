import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from '@angular/common';
import { NewNavigationComponent } from './new-navigation.component';
import { from } from 'rxjs';

describe('NewNavigationComponent', () => {
  let component: NewNavigationComponent;
  let fixture: ComponentFixture<NewNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNavigationComponent ],
      providers :[],
      imports :[RouterTestingModule]
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

//this is a dummy component to see rouying is happennign or not

