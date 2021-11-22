import { ApiService } from './../../service/api.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { IFilme } from 'src/model/ifilme';
import { HttpClient, HttpClientModule } from '@angular/common/http';
var data : IFilme[] ;

var _service = new ApiService;

var _serviceHttp : HttpClient


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

  serviceHttp = _serviceHttp;

  constructor() { }

  

  getNome(){
    //this.filmeResponse = this.service.getMovie(this.title)
    this.filmeResponse = this.service.getMovie(this.title)
    this.dataSource = this.filmeResponse;
    this.title = ""
  }
}

