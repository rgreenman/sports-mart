import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSelectionComponent } from './pos-selection.component';

describe('PosSelectionComponent', () => {
  let component: PosSelectionComponent;
  let fixture: ComponentFixture<PosSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
