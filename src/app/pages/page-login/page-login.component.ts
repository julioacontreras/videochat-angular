import { Component } from '@angular/core';
import { login } from '../../../ddd/authentication/application/use-cases/login';
import { Authentication } from '../../../ddd/authentication/domains/types/Authentication';
import { LoginFormModule } from '../../login-form/login-form.module'
import { Router } from '@angular/router'

@Component({
  standalone: true,
  selector: 'page-login',
  imports: [ LoginFormModule ],
  templateUrl: './page-login.template.html',
  styleUrl: './page-login.style.css'
  
})
export class PageLoginComponent {
  constructor(private router: Router) { }

  onLogin(event: Authentication) {
    if (login(event)) {
      this.router.navigate(['room', event.username])
    }
  }
}
