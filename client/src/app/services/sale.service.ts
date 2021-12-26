import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Item } from '../models/item.model';
import { map, finalize } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  public items!: Observable<any>;
  receiveData: any;


  constructor(
    public fireStore: AngularFirestore,
    private httpClient: HttpClient,
    private fireStorage: AngularFireStorage,
    private user: UserService
  ) { 
    this.items = fireStore.collection<any>('tools').valueChanges({ idField: 'id1' });
  }

  getAllItem(){
    return this.items;
  }

  receiveItemData(item: any): Observable<any> {
    this.receiveData = {id1: item.id1, type: item.type, name: item.name, image: item.image, amount: item.amount, price: item.price, status: item.status};
    if(this.receiveData != ''){
      console.log(this.receiveData , 'hello')
    }
    return this.receiveData;

  }

  holdData(){
    return this.receiveData;
  }

  //Add to Carts
  addToCart(data: any) {
    return this.fireStore.collection(`carts/${this.user.userName}/cart`).add(data);
  }

  getCart() {
    return this.fireStore.collection(`carts/${this.user.userName}/cart`).snapshotChanges();

  }



}
