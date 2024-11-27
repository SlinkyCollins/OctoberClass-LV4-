import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  public lastname=''
  public array = []
  constructor(public userserve:UserServiceService) {}
  ngOnInit() {
// console.log(this.userserve.lastname);
// this.lastname = this.userserve.lastname;

console.log(this.userserve.randomArray);




console.log(this.userserve.getlastname());


  }
}
