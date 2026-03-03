import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: `app.nav-bar.html`,
  styleUrls: [`app.nav-bar.css`,]
})
export class AppNavBar {

}
