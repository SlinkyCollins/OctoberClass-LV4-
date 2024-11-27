import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const studentGuard: CanActivateFn = (route, state) => {
  let student = JSON.parse(localStorage.getItem('currentStudent')!);
  let router = inject(Router);
  if(!student){
    router.navigate(['/']);
  }
  return true;
};