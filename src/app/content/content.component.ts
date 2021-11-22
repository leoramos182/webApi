import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { IFilme } from 'src/model/ifilme';

var data : IFilme[] ;

var _service = new ApiService;


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

  displayedColumns: string[] = ['Nome', 'AnoFilme', 'Genero','Diretor','ImdbRating'];

  title: string;

  dataSource = data;

  filmeResponse : any

  service = _service;

  constructor() { }

  

  getNome(){
    this.filmeResponse = this.service.getMovie(this.title)
    this.dataSource = this.filmeResponse;
    this.title = ""
  }
}

