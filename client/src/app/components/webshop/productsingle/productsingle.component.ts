import { Component, OnInit } from '@angular/core';
import {SaleService} from '../../../services/sale.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../../../models/item.model'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.scss']
})
export class ProductsingleComponent implements OnInit {
  itemList: any[] = [];
  item: any;
  public itemReceive: any;



  constructor(
    private saleService: SaleService,
    private readonly db: AngularFirestore,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.renderItemData();
  }

  renderItemData() {
      this.item = this.saleService.holdData()
        console.log(this.item, 'done')
      ;
  
}

}
