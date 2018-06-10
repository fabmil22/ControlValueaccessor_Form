import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpadreComponent } from './formpadre.component';

describe('FormpadreComponent', () => {
  let component: FormpadreComponent;
  let fixture: ComponentFixture<FormpadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
