import { Component, signal } from '@angular/core'
import { Button } from 'primeng/button'
@Component({
  selector: 'app-navbar',
  imports: [Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  isDarkMode = signal<boolean>(false)

  toggleDarkMode() {
    this.isDarkMode.update(value => !value)
    document.documentElement.classList.toggle('app-dark', this.isDarkMode())
  }
}
