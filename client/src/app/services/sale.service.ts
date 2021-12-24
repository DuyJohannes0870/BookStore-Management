import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Item } from '../models/item.model';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  public items!: Observable<any>;


  constructor(
    public fireStore: AngularFirestore,
    private httpClient: HttpClient,
    private fireStorage: AngularFireStorage
  ) { 
    this.items = fireStore.collection<any>('tools').valueChanges({ idField: 'id1' });
  }

  getAllItem(){
    return this.items;
  }
}
