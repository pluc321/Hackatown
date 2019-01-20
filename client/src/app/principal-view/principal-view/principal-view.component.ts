import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {
  hide: boolean = true;
  appear: boolean = false;
  onClickMe() {
    this.hide = false;
    this.appear = true;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
