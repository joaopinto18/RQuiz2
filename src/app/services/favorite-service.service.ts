import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { MovieModel } from 'src/app/models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  private c1: AngularFirestoreCollection<MovieModel>

  constructor(private firestore:AngularFirestore) { 
    this.c1 = this.firestore.collection<MovieModel>("movie-model");
  }

  createNewPost(data:MovieModel): Promise<DocumentReference>{
    return this.c1.add(data);
  }
}
