import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-angular-material',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDividerModule, MatInputModule, MatFormFieldModule],
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.css'
})
export class AngularMaterialComponent {
  constructor(private _snackBar:MatSnackBar){}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
