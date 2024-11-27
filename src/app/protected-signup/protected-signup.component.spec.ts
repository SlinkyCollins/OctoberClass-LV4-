import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedSignupComponent } from './protected-signup.component';

describe('ProtectedSignupComponent', () => {
  let component: ProtectedSignupComponent;
  let fixture: ComponentFixture<ProtectedSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
