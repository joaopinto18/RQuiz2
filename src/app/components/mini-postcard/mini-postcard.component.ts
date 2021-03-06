import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie-model';

@Component({
  selector: 'app-mini-postcard',
  templateUrl: './mini-postcard.component.html',
  styleUrls: ['./mini-postcard.component.scss']
})
export class MiniPostcardComponent implements OnInit {

  @Input() postModel!: MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
