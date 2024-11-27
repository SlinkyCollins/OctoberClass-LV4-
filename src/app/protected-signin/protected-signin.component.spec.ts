import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedSigninComponent } from './protected-signin.component';

describe('ProtectedSigninComponent', () => {
  let component: ProtectedSigninComponent;
  let fixture: ComponentFixture<ProtectedSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedSigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
