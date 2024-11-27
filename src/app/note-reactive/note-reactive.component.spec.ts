import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteReactiveComponent } from './note-reactive.component';

describe('NoteReactiveComponent', () => {
  let component: NoteReactiveComponent;
  let fixture: ComponentFixture<NoteReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
