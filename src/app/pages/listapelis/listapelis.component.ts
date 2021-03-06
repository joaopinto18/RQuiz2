import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie-model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-listapelis',
  templateUrl: './listapelis.component.html',
  styleUrls: ['./listapelis.component.scss']
})
export class ListapelisComponent implements OnInit {

  data: any;

  /**
   * 
   * LO QUE ESTA EN ESTE CONSTRUCTOR DEBERIA DE SER UNA FUNCION EN EL SERVICE
   */

   //en data esta todo lo de la api
  constructor(private movie: PeliculasService) { 
    this.movie.apiData().subscribe((data)=>{
      console.warn(data);
      this.data=data;
    });
  }

  ngOnInit(): void {
  }

  /**
   * FUNCION QUE TE LEA TODAS LAS PELIS, TE SAQUE LOS 4 DATOS QUE NECESITAS DE CADA PELI Y DE ESA FORMA TE LOS 
   * LLEVAS AL POST
   */



}
