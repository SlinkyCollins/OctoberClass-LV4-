import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactParentComponent } from './contact-parent.component';

describe('ContactParentComponent', () => {
  let component: ContactParentComponent;
  let fixture: ComponentFixture<ContactParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
