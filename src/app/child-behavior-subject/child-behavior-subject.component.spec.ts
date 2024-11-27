import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBehaviorSubjectComponent } from './child-behavior-subject.component';

describe('ChildBehaviorSubjectComponent', () => {
  let component: ChildBehaviorSubjectComponent;
  let fixture: ComponentFixture<ChildBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBehaviorSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
