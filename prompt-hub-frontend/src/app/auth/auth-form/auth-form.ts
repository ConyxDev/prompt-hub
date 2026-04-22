import { Component, signal } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {

  mode = signal<'login' | 'register'>('login')

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  toggleMode() {
    this.mode.update(value=> value === 'login' ? 'register' : 'login')
  }

  submit() {
    if (this.mode() === 'login') {

    } else {

    }
  }

  login(username: string, password: string) {
    //this.login()
  }

  register() {
    //this.register()
  }
}
