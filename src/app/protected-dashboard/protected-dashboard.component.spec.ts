import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedDashboardComponent } from './protected-dashboard.component';

describe('ProtectedDashboardComponent', () => {
  let component: ProtectedDashboardComponent;
  let fixture: ComponentFixture<ProtectedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
