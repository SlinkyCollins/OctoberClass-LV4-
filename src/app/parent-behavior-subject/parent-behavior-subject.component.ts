import { Component } from '@angular/core';
import { ChildBehaviorSubjectComponent } from "../child-behavior-subject/child-behavior-subject.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-parent-behavior-subject',
  standalone: true,
  imports: [ChildBehaviorSubjectComponent, FormsModule, CommonModule],
  templateUrl: './parent-behavior-subject.component.html',
  styleUrl: './parent-behavior-subject.component.css'
})
export class ParentBehaviorSubjectComponent {
  public msg:any =''
  constructor(public behaviorsub:BehaviourSubjectService){}
  upd(){
    console.log(this.msg);
    this.behaviorsub.behaviors.next(this.msg);    
  }
}
