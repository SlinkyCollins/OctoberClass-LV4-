import { Component } from '@angular/core';
import { ContactChildComponent } from "../contact-child/contact-child.component";
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-contact-parent',
  standalone: true,
  imports: [ContactChildComponent],
  templateUrl: './contact-parent.component.html',
  styleUrl: './contact-parent.component.css'
})
export class ContactParentComponent {
 public contact:any = {};
  constructor(public behaviorsub:BehaviourSubjectService){}

  ngOnInit(){
    this.behaviorsub.behaviors.subscribe(resp=>{
      console.log(resp);
      this.contact = resp
      
      // console.log(this.contact);
    });   
    // this.behaviorsub.behavior.next();
  }
  
}
