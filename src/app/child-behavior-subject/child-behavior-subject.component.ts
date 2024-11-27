import { Component } from '@angular/core';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-child-behavior-subject',
  standalone: true,
  imports: [],
  templateUrl: './child-behavior-subject.component.html',
  styleUrl: './child-behavior-subject.component.css'
})
export class ChildBehaviorSubjectComponent {
  constructor(public behaviorsub:BehaviourSubjectService){}
  public data:any

  ngOnInit(){
    console.log(this.behaviorsub.behaviors);
    this.behaviorsub.behaviors.subscribe(data=>{
      console.log(data);
      this.data=data;
    })
    
  }
}
