import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie-model';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {

  @Input() postModel!: MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
