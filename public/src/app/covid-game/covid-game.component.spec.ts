/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CovidGameComponent } from './covid-game.component';

describe('CovidGameComponent', () => {
  let component: CovidGameComponent;
  let fixture: ComponentFixture<CovidGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
