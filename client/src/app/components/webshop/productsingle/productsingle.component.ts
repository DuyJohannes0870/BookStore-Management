import { Component, OnInit } from '@angular/core';
import {SaleService} from '../../../services/sale.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../../../models/item.model'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.scss']
})
export class ProductsingleComponent implements OnInit {
  itemList: any[] = [];
  item: any;
  public itemReceive: any;
  amount: any;



  constructor(
    private saleService: SaleService,
    private readonly db: AngularFirestore,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user.userRender()
    this.renderItemData();
  }

  renderItemData() {
      this.item = this.saleService.holdData()
        console.log(this.item, 'done')
      ;
  }

  addToCart(amount: any) {
    let data = {
      idDoc: this.item.id1,
      type: this.item.type,
      image: this.item.image,
      name: this.item.name,
      price: this.item.price,
      amount: +amount
    }
    this.saleService.addToCart(data);
  }


}
