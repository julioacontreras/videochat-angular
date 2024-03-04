import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.template.html',
  styleUrls: [
    './login-form.style.css'
  ],
})
export class LoginFormComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit() {
    if (this.form.valid) {
      this.onLogin.emit(this.form.value)
    }
  }  

  @Output() onLogin = new EventEmitter()
}
