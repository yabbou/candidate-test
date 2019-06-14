import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugDetailComponent } from './rug-detail.component';

describe('RugDetailComponent', () => {
  let component: RugDetailComponent;
  let fixture: ComponentFixture<RugDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
