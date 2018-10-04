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
    item.added=true;
    this.cartList.push(item);
  }

  getCartItems(){
    return this.cartList;
  }

removeFromCart(removedItem){
    removedItem.added=false;
    const index=this.cartList.findIndex((item)=>{
      return item.itemId===removedItem.itemId;
    });
    this.cartList.splice(index);
  }
}

  const stock =[
    {"itemId":1,"itemName":'Onion', "imageUrl":"assets/img/stock/1.jpg", "added":false},
    {"itemId":2,"itemName":'Tomato', "imageUrl":"assets/img/stock/2.jpg", "added":false}
  ]

