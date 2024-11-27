import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public route:Router){}
  public name=''
  public email=''
  public phonenumber=''
  public address=''
  public contactArray: any[] = [];
  public contactinfo: any = [];

  ngOnInit() {
    let storedContacts = localStorage.getItem('app-contact');
    if (storedContacts) {
      this.contactArray = JSON.parse(storedContacts);
    }
  }


  createcontact() {
    let contactObj = {
      name: this.name,  
      email: this.email,
      pnumber: this.phonenumber,
      address: this.address
    }
  
    console.log(contactObj);

    this.contactArray.push(contactObj);

    localStorage.setItem('app-contact', JSON.stringify(this.contactArray));

    console.log(localStorage['app-contact']);

          this.name = '';
          this.email = '';
          this.phonenumber = '';
          this.address = '';
    
  }

  viewContact(i: number) {
    localStorage.setItem('contactinfo', JSON.stringify(this.contactArray[i]));
    // this.route.navigate([`/contact/view/${i}`]); 
  }
  

  check(i:number) {
    this.route.navigate([`/contact/view/${i}`]);
  }

  
  deleteContact(i:number) {
    this.contactArray.splice(i, 1);
    localStorage.setItem('app-contact', JSON.stringify(this.contactArray));
  }

}
