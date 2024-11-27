import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
constructor(
  public actroute:ActivatedRoute,
  public route:Router
){}
public editIndex:number = 0;
public editName = '';
public editEmail = '';
public editPhonenumber = '';
public editArray: any[] = [];

public editAddress = '';
ngOnInit() {
    this.editIndex = +this.actroute.snapshot.params['index']; 
    const savedContacts = localStorage.getItem('app-contact');
    
    if (savedContacts) {
      this.editArray = JSON.parse(savedContacts);
      
      const contact = this.editArray[this.editIndex];
      if (contact) {  
        this.editName = contact.name;
        this.editEmail = contact.email;
        this.editPhonenumber = contact.pnumber;
        this.editAddress = contact.address;
      }
    }
}



saveEditContact() {
  if (this.editIndex !== null && this.editArray[this.editIndex]) {
    this.editArray[this.editIndex] = {
      name: this.editName,
      email: this.editEmail,
      pnumber: this.editPhonenumber,
      address: this.editAddress,
    };

    localStorage.setItem('app-contact', JSON.stringify(this.editArray));

    this.editIndex = 0;
    this.editName = '';
    this.editEmail = '';
    this.editPhonenumber = '';
    this.editAddress = '';

    this.route.navigate(['/contact']);
  }
}


}
