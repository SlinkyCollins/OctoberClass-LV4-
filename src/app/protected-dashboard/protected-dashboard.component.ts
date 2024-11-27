import { Component } from '@angular/core';
import { BehaviourSubjectService } from '../services/behaviour-subject.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-protected-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './protected-dashboard.component.html',
  styleUrl: './protected-dashboard.component.css'
})
export class ProtectedDashboardComponent {
  constructor (public userserve:UserServiceService, public route:Router){}
  
  public oldPass = '';
  public newPass= '';
  public confirmNewPass = '';


logout() {
  this.userserve.clearCurrentUser();
  this.route.navigate(['/userSignIn']);
}



upd(){

  const studentIndex = this.userserve.studentArray.findIndex((student) => student.email == this.userserve.currentUser.email);

  if (studentIndex == -1) {
    console.log('Student not found in the array');
    return;
  }

  if (this.oldPass==this.userserve.currentUser.password){
    console.log("Correct old Password");
    if (this.userserve.currentUser.password == this.newPass){
      console.log("Old password cannot be same as new password"); 
    } else {
      if (this.newPass == this.confirmNewPass) {
        console.log("password updated");

        this.userserve.studentArray[studentIndex].password = this.newPass;
        this.userserve.currentUser.password = this.newPass;

        localStorage.setItem('studentArray', JSON.stringify(this.userserve.studentArray));
        localStorage.setItem('currentStudent', JSON.stringify(this.userserve.currentUser));

        this.oldPass = '';
        this.newPass = '';
        this.confirmNewPass = '';
      } else {
        console.log("confirm new Password do not match");
      }
    }   
  } else {
    console.log("Incorrect old password");
  }
}

}