import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css'
})
export class AboutpageComponent {
  constructor(public userserve:UserServiceService) {}

  public age:number= 0;

  ngOnInit(){
    this.age = this.userserve.age;
    console.log(this.age);
    
  }


}
