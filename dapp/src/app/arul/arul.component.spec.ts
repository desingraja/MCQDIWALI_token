import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArulComponent } from './arul.component';

describe('ArulComponent', () => {
  let component: ArulComponent;
  let fixture: ComponentFixture<ArulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
