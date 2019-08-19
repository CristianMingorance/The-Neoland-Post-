import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../Servicio/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _data: DataService,public _routeActive: ActivatedRoute) { }

  ngOnInit() {
  }

}
