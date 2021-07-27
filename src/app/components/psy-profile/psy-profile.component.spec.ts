import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyProfileComponent } from './psy-profile.component';

describe('PsyProfileComponent', () => {
  let component: PsyProfileComponent;
  let fixture: ComponentFixture<PsyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
