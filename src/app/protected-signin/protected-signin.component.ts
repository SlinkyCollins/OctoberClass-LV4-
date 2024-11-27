import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-protected-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './protected-signin.component.html',
  styleUrl: './protected-signin.component.css'
})
export class ProtectedSigninComponent {
  constructor(
    public route:Router,
    public userserve:UserServiceService
  ){}
  
  public studentArray:any = [];
  public email='';
  public password = '';
  public msg = '';

  ngOnInit(){
    this.studentArray = JSON.parse(localStorage.getItem('studentArray')!);
    console.log(localStorage['studentArray']);
  }
  signin(){
    let student = this.studentArray.find((student:any, index: number)=>student.email==this.email && student.password==this.password)

    if (student) {
      console.log(student);
      this.userserve.setCurrentUser(student);
      this.route.navigate(['/userDash']);
    } else {
      this.msg = 'Incorrect email or password';
    }
  }
}
