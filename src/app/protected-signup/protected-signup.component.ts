import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './protected-signup.component.html',
  styleUrl: './protected-signup.component.css'
})
export class ProtectedSignupComponent {
  constructor(public router:Router){}
  public fullName = ''
  public email = ''
  public password = ''
  public phoneNumber = ''
  public studentArray:any = [];
  public feedbackMessage = '';
  public checkEmail = '';

  ngOnInit(){
    if(localStorage['studentArray']) {
      this.studentArray = JSON.parse(localStorage.getItem('studentArray')!);
    }
  }

  showFeedbackMessage(message:string) {
    this.feedbackMessage = message;
  }

  signup () {
    let studentObj = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber
    };


    for(let i = 0; i < this.studentArray.length; i++) {
      const element = this.studentArray[i];
      console.log(element);
      this.checkEmail = element.email   
    };
    
    if (this.checkEmail == this.email){
      this.showFeedbackMessage('User already exists');
    } else {
      this.studentArray.push(studentObj);
      this.showFeedbackMessage('User saved successfully');
      localStorage.setItem('studentArray', JSON.stringify(this.studentArray));
      this.router.navigate(['/userSignIn']);
    }
    

    this.fullName = '';
    this.email = '';
    this.password = '';
    this.phoneNumber = '';
    
  }

}
