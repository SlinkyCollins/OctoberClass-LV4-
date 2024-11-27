import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewcontact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.css'
})
export class ViewcontactComponent {
  public contactinfo: any = {};

    ngOnInit(){
      this.contactinfo = JSON.parse(localStorage.getItem('contactinfo')!)
      console.log(this.contactinfo);
      

    }
}
