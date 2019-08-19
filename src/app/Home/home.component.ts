import {
  Component,
  OnInit
} from '@angular/core';

import {
  DataService
} from '../Servicio/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public _data: DataService,public _routeActive: ActivatedRoute) {


  

  }

 

  ngOnInit() {

    this._data.getPolitics();
    
    this._data.getArticles();

  }
}
