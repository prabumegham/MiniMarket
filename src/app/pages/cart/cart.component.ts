import { Component, OnInit } from '@angular/core';
import { StockService} from '../../services/stock/stock.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList=[];
  constructor(private stockService:StockService) { 

    this.cartList=stockService.getCartItems();
  }

  ngOnInit() {

  }

}
