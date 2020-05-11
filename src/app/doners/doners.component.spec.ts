import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonersComponent } from './doners.component';

describe('DonersComponent', () => {
  let component: DonersComponent;
  let fixture: ComponentFixture<DonersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
