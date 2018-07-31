import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product'
import { registerModuleFactory } from '../../../../node_modules/@angular/core/src/linker/ng_module_factory_loader';
@Component({
  selector: 'app-ecomm-item',
  templateUrl: './ecomm-item.component.html',
  styleUrls: ['./ecomm-item.component.css']
})
export class EcommItemComponent implements OnInit {
  public product: Product;

  constructor() { }

  ngOnInit() {

    this.product = new Product('Table', 10, true, 0, "./assets/table.jpg");
    console.log(JSON.stringify(this.product));
  }

  addQuantity(event) {
    console.log('Add 1 quantity for this product', event);
    this.product.quantity = this.product.quantity + 1;
  }

  deductQuantity(event) {
    console.log('deduct 1 quantity for this product', event);
    this.product.quantity = this.product.quantity - 1;
  }

  checkCurrentQuantity() {
    if (this.product.quantity >= 10) {
      return true;
    }
    else if (this.product.quantity <= 0) {
      return true;
    }
    else {
      return false;
    }

  }

}
