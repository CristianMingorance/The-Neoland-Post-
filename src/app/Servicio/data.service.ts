import {
  Injectable
} from '@angular/core';
import {
  ApiService
} from '../Api/service.service'



@Injectable({
  providedIn: 'root'
})
export class DataService {
  politics = []
  health = []
  articulos = []
  business = []
  science = []
  sports = []
  technology = []
  games = []
  // categories = []
  constructor(public _api: ApiService) {

    // this.getArticles();
    // this.getCategories();
  }


  // getCategories() {

  //   this.categories = [ {

  //     id: "general",
  //     name: "General"
  //   }, {

  //     id: "health",
  //     name: "Health"
  //   }, {

  //     id: "business",
  //     name: "Business"
  //   }, {

  //     id: "science",
  //     name: "Science"
  //   }, {

  //     id: "sports",
  //     name: "Sports"
  //   }, {

  //     id: "technology",
  //     name: "Technology"
  //   }, {

  //     id: "games",
  //     name: "Games"
  //   }]


  // }
  getArticles() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=cb9f3efa182a4d79a3e22f16271f1ee0")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let headNews = response.articles[i]

          this.articulos.push(headNews)
          // console.log(headNews)



          //console.log(articulos)
        }
      })
  }
  getHealth() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=health&apiKey=cb9f3efa182a4d79a3e22f16271f1ee0")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let arrHealth = response.articles[i]

          this.health.push(arrHealth)
          // console.log(arrHealth)



          //console.log(articulos)
        }
      })
  }



  getBussines() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?apiKey=cb9f3efa182a4d79a3e22f16271f1ee0&q=business")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let arrBusiness = response.articles[i]

          this.business.push(arrBusiness)
          // console.log(arrHealth)



          //console.log(articulos)
        }
      })
  }
  getScience() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?apiKey=cb9f3efa182a4d79a3e22f16271f1ee0&q=science")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let arrScience = response.articles[i]

          this.science.push(arrScience)
          // console.log(arrHealth)



          //console.log(articulos)
        }
      })
  }

  
  getSports() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?apiKey=cb9f3efa182a4d79a3e22f16271f1ee0&q=sports")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let arrSports = response.articles[i]

          this.sports.push(arrSports)
          // console.log(arrHealth)



          //console.log(articulos)
        }
      })
  }


  getTechnology() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?apiKey=cb9f3efa182a4d79a3e22f16271f1ee0&q=technology")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let arrTechnology = response.articles[i]

          this.technology.push(arrTechnology)
          // console.log(arrHealth)



          //console.log(articulos)
        }
      })
  }

  getGames() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?apiKey=cb9f3efa182a4d79a3e22f16271f1ee0&q=games")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let arrGames = response.articles[i]

          this.games.push(arrGames)
          // console.log(arrHealth)



          //console.log(articulos)
        }
      })
  }

  getPolitics() {


    let aticles = this._api.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=politics&apiKey=cb9f3efa182a4d79a3e22f16271f1ee0")
      .subscribe((response) => {
        // console.log(response)


        for (let i = 0; i < response.articles.length; i++) {


          let arrPolitics = response.articles[i]

          this.politics.push(arrPolitics)
          // console.log(arrPolitics)



          //console.log(articulos)
        }
      })
  }
}
