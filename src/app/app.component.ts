import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, AboutpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'october-class';
}
