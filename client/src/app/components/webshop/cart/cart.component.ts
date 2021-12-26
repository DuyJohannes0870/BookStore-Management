import { Component, OnInit } from '@angular/core';
import {SaleService} from '../../../services/sale.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: any[] = []

  constructor(
    private sale: SaleService,
    
  ) { }

  ngOnInit(): void {
  }

}
