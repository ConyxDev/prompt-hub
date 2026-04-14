import { Component, inject, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { Button } from 'primeng/button'
@Component({
  selector: 'app-navbar',
  imports: [Button, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  router = inject(Router)

  isDarkMode = signal<boolean>(false)

  toggleDarkMode() {
    this.isDarkMode.update(value => !value)
    document.documentElement.classList.toggle('app-dark', this.isDarkMode())
  }

}
