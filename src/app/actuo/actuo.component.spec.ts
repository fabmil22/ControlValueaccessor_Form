import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuoComponent } from './actuo.component';

describe('ActuoComponent', () => {
  let component: ActuoComponent;
  let fixture: ComponentFixture<ActuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
