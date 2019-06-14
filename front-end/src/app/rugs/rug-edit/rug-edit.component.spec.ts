import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugEditComponent } from './rug-edit.component';

describe('RugEditComponent', () => {
  let component: RugEditComponent;
  let fixture: ComponentFixture<RugEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
