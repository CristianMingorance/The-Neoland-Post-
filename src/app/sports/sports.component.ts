import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../Servicio/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(public _data: DataService,public _routeActive: ActivatedRoute) { }

  ngOnInit() {

    this._data.getSports();
  }

}
