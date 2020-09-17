import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLabelComponent } from './dropdown-label.component';

describe('DropdownLabelComponent', () => {
  let component: DropdownLabelComponent;
  let fixture: ComponentFixture<DropdownLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
