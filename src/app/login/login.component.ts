import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  submit: any = false;

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  get f() { return this.userForm.controls; }

  ngOnInit() {
    this.userForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    let user = this.authService.login(
      this.userForm.value.email,
      this.userForm.value.password,
    );

    if (!user) {
      alert("Invalid Email or Password");
    }
    else {
      this.router.navigateByUrl('dashboard');
    }
  }

}
