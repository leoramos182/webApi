import { IFilme } from 'src/model/ifilme';
import { Injectable } from '@angular/core';

const BASEURL = '//www.omdbapi.com/?apikey=97474a85&t='
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public  getMovie(movieName : string) : IFilme[]{
    var filme : IFilme[] = [ {Id: '', Nome: '', AnoFilme: null , Genero: '', Diretor: '', ImdbRating: null}] ;
    var copy = []

    fetch(BASEURL+movieName)
    .then(response => response.json())
    .then(data => {
      filme[0].Id = data.imdbID
      filme[0].Nome = data.Title
      filme[0].AnoFilme = data.Year
      filme[0].Genero = data.Genre
      filme[0].Diretor = data.Director
      filme[0].ImdbRating = data.imdbRating
      copy.push(data)
    })

    return  filme ;
    
  }

  constructor() { }
}
