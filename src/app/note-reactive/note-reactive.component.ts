import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './note-reactive.component.html',
  styleUrls: ['./note-reactive.component.css']
})
export class NoteReactiveComponent {
  formtwo:FormGroup;
  editForm:FormGroup;
  public editIndex: number | null = null;
  public deleteIndex:number|null = null;
  public noteArray:any = JSON.parse(localStorage.getItem('savedNotes') || '[]');
  public feedbackMessage:string = '';
  
  
  constructor (public builder:FormBuilder, public route:Router){
    this.formtwo = builder.group({
      title: '',
      detail:''
    })

    this.editForm = builder.group({
      title: '',
      detail:''
    })
  }

  showFeedback(message:string) {
    this.feedbackMessage = message;
    setTimeout(() => {
        this.feedbackMessage = '';
    }, 3000);
  }

  save(){
    const newNote = {
      title: this.formtwo.value.title,
      detail: this.formtwo.value.detail,
      date: new Date().toLocaleString(),
      isEdited: ''
    };

    this.noteArray.push(newNote);
    localStorage.setItem('savedNotes', JSON.stringify(this.noteArray));
    this.showFeedback('Note created⚡');
    this.formtwo.reset(); 
  }

  displayDetails(i:any) {
    this.route.navigate([`noteApp/${i}`]);
  }
  
  openDeleteModal(i:any) {
    this.deleteIndex = i;
  }

  deleteNote() {
    if(this.deleteIndex !== null){
      this.noteArray.splice(this.deleteIndex, 1);
      localStorage.setItem('savedNotes', JSON.stringify(this.noteArray));
      this.showFeedback('Note deleted successfully!');
      this.deleteIndex = null;
    }
  }

  openEditModal(i: number) {
    this.editIndex = i;
    const note = this.noteArray[i];
    this.editForm.patchValue({
      title: note.title,
      detail: note.detail
    });
  }

  editNote() {
    if (this.editIndex !== null) {
      const updatedNote = {
        title: this.editForm.value.title || this.noteArray[this.editIndex].title,
        detail: this.editForm.value.detail || this.noteArray[this.editIndex].detail,
        date: new Date().toLocaleString(),
        isEdited: 'Edited'
      };
      this.noteArray[this.editIndex] = updatedNote;
      localStorage.setItem('savedNotes', JSON.stringify(this.noteArray));
      this.showFeedback('Note edited!');
      this.editForm.reset();
      this.editIndex = null;
    }
  }
}



// ...this.noteArray[this.editIndex],
// ...this.editForm.value, 
