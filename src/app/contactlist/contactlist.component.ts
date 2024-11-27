import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent {
  constructor(
    public userserve:UserServiceService
  ){}
  
  public contacts:any[] = [];

  ngOnInit(){
    this.contacts = this.userserve.getAllContacts();
    console.log(this.contacts);
    
  };
  
}
