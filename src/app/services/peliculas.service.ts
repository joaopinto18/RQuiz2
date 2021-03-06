import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  /**
   * GETTING DE API DATA
   */

  apiData(){
    let page = 1;
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=b4699a9de35f57cb87fbcb373680a922&page=' + `${page}`;
    return this.http.get(url);
  }
}
