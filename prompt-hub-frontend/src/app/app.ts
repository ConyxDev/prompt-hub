import { Component, computed, signal } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { PromptListComponent } from './prompts/prompt-list/prompt-list.component';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, PromptListComponent, Navbar]
})
export class App {



}
