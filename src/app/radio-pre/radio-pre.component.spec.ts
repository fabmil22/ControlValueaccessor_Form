import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPreComponent } from './radio-pre.component';

describe('RadioPreComponent', () => {
  let component: RadioPreComponent;
  let fixture: ComponentFixture<RadioPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
