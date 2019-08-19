import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../Servicio/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _data: DataService,public _routeActive: ActivatedRoute) { }

  ngOnInit() {

    

  }

}
