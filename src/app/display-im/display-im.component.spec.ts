import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayImComponent } from './display-im.component';

describe('DisplayImComponent', () => {
  let component: DisplayImComponent;
  let fixture: ComponentFixture<DisplayImComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayImComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
