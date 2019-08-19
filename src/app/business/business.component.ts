import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../Servicio/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(public _data: DataService,public _routeActive: ActivatedRoute) { }

  ngOnInit() {
    this._data.getBussines();
  }

}
