import { Component, OnInit } from '@angular/core';
import {SaleService} from '../../../services/sale.service'
import { Cart } from '../../../models/item.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(
    private sale: SaleService
    
  ) { }
  public carts: Cart[] = [];
  ngOnInit() {
    this.sale.getCart().subscribe((cart:any)=>{
      cart.map((item:any)=>{
        const mapItem = item.payload.doc._delegate._document.data.value.mapValue.fields
        let _item: Cart = {
          idDoc: mapItem.idDoc.stringValue,
          name: mapItem.name.stringValue,
          image: mapItem.image.stringValue,
          amount: parseInt(mapItem.amount.integerValue),
          price: parseInt(mapItem.price.integerValue),
          type: mapItem.type.stringValue
        }
        this.carts.push(_item)
        console.log(this.carts)
      })
    })
  }

}
