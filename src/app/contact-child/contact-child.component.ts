import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-contact-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-child.component.html',
  styleUrl: './contact-child.component.css'
})
export class ContactChildComponent {
  constructor(
    public userserve:UserServiceService,
    public behaviorsub:BehaviourSubjectService
  ){}
  
  public contacts:any[] = [];
  public data={};


  ngOnInit(){
    this.contacts = this.userserve.getAllContacts();
    console.log(this.contacts);

    console.log(this.behaviorsub.behaviors);
  
  };

  upd(contact:any) {
    console.log(contact);
    
   this.behaviorsub.behaviors.next(contact);
  }
 }
