import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  submitted: boolean = false;
  model = new User('', '');
  constructor(public router: Router) { }

  onSubmit() { this.submitted = true; }

  btnClick() {
    this.router.navigateByUrl('/clientView');
  }

  ngOnInit() {
  }

}
