import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {

  constructor() { }

  public behavior = new BehaviorSubject('AFoo');
  public behaviors = new BehaviorSubject(
    {
      name: 'Collins',
      pnumber: '09037613598',
      email: 'afolabiademola27@gmail.com',
      address: 'No. 89, Lekki Street'
    }
  );

  // public studentDetails = new BehaviorSubject(
  //   JSON.parse(localStorage.getItem('currentStudent')!)
  //   ||
  //   {
  //     email : '',
  //     fullName : '',
  //     password : '',
  //     phoneNumber : ''
  //   }
  // );

  
}
