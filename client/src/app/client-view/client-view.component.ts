import { Component, OnInit } from '@angular/core';
import {Resto} from "../Resto";
import {RESTOS} from "../mockRestos";

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  restos = RESTOS;
  selectedResto: Resto;
  onSelect(resto: Resto): void {
    this.selectedResto =  resto;
  }


  constructor() { }

  ngOnInit() {
  }

}
