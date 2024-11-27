import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

// public student:any = {};
public msg = 'I am going to the market';
public lastname = 'Ademola'
public firstname = 'Afolabi'
public age=12
public color = ''
public randomArray:any = [{
   firstname: 'Ademola',
   age: 12,
   color: 'white'
 },
{
   firstname: 'Collins',
   age: 21,
   color: 'brown'
 },
{
   firstname: 'Peter',
   age: 32,
   color: 'white'
 },
 {
   firstname: 'Paul',
   age: 43,
   color: 'white'
 },
];

getlastname() {
 return this.lastname;
}



  public contacts:any[] = [];

    getAllContacts() {
      const savedContacts = localStorage.getItem('app-contact');
      this.contacts = savedContacts ? JSON.parse(savedContacts) : [];
      return this.contacts;
    };



    
  public studentArray:any[] = JSON.parse(localStorage.getItem('studentArray')!) || [];

  public currentUser = JSON.parse(localStorage.getItem('currentStudent')!) || null;

  setCurrentUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('currentStudent', JSON.stringify(user));
  }

  clearCurrentUser() {
    this.currentUser = null;
    localStorage.removeItem('currentStudent');
  }

  
}