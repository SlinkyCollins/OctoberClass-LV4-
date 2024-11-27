import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBehaviorSubjectComponent } from './parent-behavior-subject.component';

describe('ParentBehaviorSubjectComponent', () => {
  let component: ParentBehaviorSubjectComponent;
  let fixture: ComponentFixture<ParentBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBehaviorSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
