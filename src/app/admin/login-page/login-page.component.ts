import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../../shared/interfaces';

@Component({
  selector: 'arh-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  errorMessage: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthentificated()) {
      this.router.navigateByUrl('/arh-admin/dashboard').then();
    }

    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.errorMessage = 'Пожалуйста, введите данные';
      } else if (params['authFailed']) {
        this.errorMessage = 'Сессия истекла. Введите данные заного';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigateByUrl('/arh-admin/dashboard').then();
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }

}
