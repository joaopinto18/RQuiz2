import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie-model';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-listapelis',
  templateUrl: './listapelis.component.html',
  styleUrls: ['./listapelis.component.scss']
})
export class ListapelisComponent implements OnInit {
  page:number=1;
  data: any;

  /**
   * 
   * LO QUE ESTA EN ESTE CONSTRUCTOR DEBERIA DE SER UNA FUNCION EN EL SERVICE
   */

   //en data esta todo lo de la api
  constructor(private movie: PeliculasService, private http: HttpClient) { 
    this.apiData().subscribe((data)=>{
      console.warn(data);
      this.data=data;
    });
  }

  ngOnInit(): void {
  }

  apiData(){
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=b4699a9de35f57cb87fbcb373680a922&page=' + `${this.page}`;
    return this.http.get(url);
  }

/**
 * PASA A LA SIGUIENTE PELI
 */

  siguientePeli(){
    this.page++;
    if(this.page==51){
      this.page=1;
    }
    this.apiData().subscribe((data)=>{
      console.warn(data);
      this.data=data;
  });
}

/**
 * PASA A LA PELI ANTERIOR
 */

anteriorPeli(){
  this.page--;
  if(this.page==0){
    this.page=50;
  }
  this.apiData().subscribe((data)=>{
    console.warn(data);
    this.data=data;
});
}

}
