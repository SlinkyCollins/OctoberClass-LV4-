import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  formone:FormGroup;

  constructor (public builder:FormBuilder){
    this.formone = builder.group({
      fname:['', Validators.minLength(4)],
      pnumber:['', [Validators.maxLength(11), Validators.required]],
      email: ['',Validators.required],
      address: ['', Validators.required],
      check: false
    })
  }

  public msg:any = 'Check the box';
  
  reactive(){

    console.log(this.formone.value);
    console.log(this.formone.value['email']);
    
  }
}
