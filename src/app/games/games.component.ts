import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../Servicio/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(public _data: DataService,public _routeActive: ActivatedRoute) { }

  ngOnInit() {

    this._data.getGames();
  }

}
