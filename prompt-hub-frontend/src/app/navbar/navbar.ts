import { Component, effect, inject, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { Button } from 'primeng/button'
import { AuthService } from '../auth/auth-service'
@Component({
  selector: 'app-navbar',
  imports: [Button, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  router = inject(Router)
  authService = inject(AuthService)
  readonly DARk_MODE_KEY = 'dark-mode'

  isDarkMode = signal(localStorage.getItem(this.DARk_MODE_KEY) === 'true')

  constructor () {
    effect(() => {
      document.documentElement.classList.toggle('app-dark', this.isDarkMode())
      localStorage.setItem(this.DARk_MODE_KEY, String(this.isDarkMode()))
    })
  }

  toggleDarkMode() {
    this.isDarkMode.update(value => !value)
    document.documentElement.classList.toggle('app-dark', this.isDarkMode())
  }

  logout() {
    this.authService.logOut().subscribe(()=> {
      void this.router.navigate(['/'])
    })
  }

}
