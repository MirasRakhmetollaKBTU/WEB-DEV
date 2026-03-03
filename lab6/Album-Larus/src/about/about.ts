import { Component } from '@angular/core';
import { AppNavBar } from '../app.nav-bar/app.nav-bar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AppNavBar],
  templateUrl: "about.html",
  styleUrl: `about.html`,
})
export class About {

}
