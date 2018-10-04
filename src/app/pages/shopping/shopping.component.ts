import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock/stock.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  stockList=[];
  constructor(private stockService: StockService) {
    this.stockList=stockService.getStock();
   }

  ngOnInit() {
    
  }
  addToBasket(item){
    this.stockService.addToCart(item);
  }

}
