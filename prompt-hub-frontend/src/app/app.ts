import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Navbar } from "./navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, Navbar, RouterOutlet]
})
export class App {



}
