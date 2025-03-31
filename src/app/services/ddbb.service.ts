import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Manhwa } from '../interfaces/manhwa';

@Injectable({
  providedIn: 'root'
})
export class ManhwaService {
  private collectionName = 'manhwas';

  constructor(private firestore: AngularFirestore) {}

  obtenerManhwas(): Observable<Manhwa[]> {
    return this.firestore.collection<Manhwa>(this.collectionName).valueChanges({ idField: 'id' });
  }

  obtenerDatos() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  agregarDato(Manhwa: Manhwa) {
    return this.firestore.collection(this.collectionName).add(Manhwa);
  }
}
