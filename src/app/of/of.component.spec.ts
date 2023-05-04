import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OFComponent } from './of.component';

describe('OFComponent', () => {
  let component: OFComponent;
  let fixture: ComponentFixture<OFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
