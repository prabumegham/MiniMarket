import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stockList=[];
  cartList=[];
  constructor() { }
  getStock(){
    return this.stockList=stock;
  }
  addToCart(item){
    this.cartList.push(item);
  }
  getCartItems(){
    return this.cartList;
  }
}
  const stock =[
    {"itemName":'Onion', "imageUrl":"assets/img/stock/1.jpg"},
    {"itemName":'Tomato', "imageUrl":"assets/img/stock/2.jpg"}
  ]

