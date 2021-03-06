import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../models/movie-model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
