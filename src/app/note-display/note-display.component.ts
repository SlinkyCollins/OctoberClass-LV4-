import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-display.component.html',
  styleUrl: './note-display.component.css'
})
export class NoteDisplayComponent {
  public noteIndex: number = 0;
  public noteArray: any = JSON.parse(localStorage.getItem('savedNotes') || '[]');
  public selectedNote: any;

  constructor(public actroute: ActivatedRoute) {}

  ngOnInit() {
    this.noteIndex = +this.actroute.snapshot.params['id']; 
    this.selectedNote = this.noteArray[this.noteIndex];
  }



    
  

  
}
