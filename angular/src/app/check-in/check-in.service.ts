import { Injectable } from '@angular/core';
import { Seller, Item } from './check-in-dtos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class CheckInService {

  constructor() {
  }

  seller = new Seller(undefined, '', '', '', '', '', '');

  item = new Item(undefined, undefined, undefined,'', undefined, undefined, false);

  items: Item[] = [];

  getSeller(): Seller {
  	return this.seller;
  }

  setSeller(seller: Seller): void {
  	this.seller = seller;
  }

  getItem(): Item {
  	return this.item;
  }

  setItem(item: Item): void {
  	this.item = item;
  }

  getItems(): Item[] {
  	return this.items;
  }

  setItems(items: Item[]): void {
  	this.items = items;
  }

  addItem(item: Item): void {
  	this.items.push(item);
  }

  removeItem(index: number): void {
  	this.items.splice(index, 1);
  }

}