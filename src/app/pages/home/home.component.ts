import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie-model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'movie';
  data: any;
  dataSeleccionada: Array<MovieModel>=[]

  constructor(private movie: PeliculasService) {
    this.movie.apiData().subscribe((data)=>{
      console.warn(data);
      this.data=data;
    });
   }



  ngOnInit(): void {
  }
}
