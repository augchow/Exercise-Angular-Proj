import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product'
import { registerModuleFactory } from '../../../../node_modules/@angular/core/src/linker/ng_module_factory_loader';
import { isNgTemplate } from '../../../../node_modules/@angular/compiler';
import { JsonPipe } from '../../../../node_modules/@angular/common';
@Component({
  selector: 'app-ecomm-item',
  templateUrl: './ecomm-item.component.html',
  styleUrls: ['./ecomm-item.component.css']
})
export class EcommItemComponent implements OnInit {
  public product: Product;
  public quantity: number[] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  isDisable: Boolean = false;

  public quantitylists: Array<QuantityList>
  public products: Array<Product>;
  public productClasses;

  constructor() { }

  ngOnInit() {

    this.products = [
      new Product('Table', 200, 0, 0, "./assets/table.jpg", ''),
      new Product('Chair', 150, 1, 0, "./assets/chair.jpg", ''),
      new Product('Bowl', 10, 5, 0, "./assets/bowl.jpg", '')
    ];


    // this.isDisable = this.checkCurrentQuantity();
    for (let i = 0; i < this.products.length; i++) {
      if (this.checkStockAvailable(this.products[i].stockAvailable)) {
        this.products[i].color = 'onSales';
      }
      else {
        this.products[i].color = 'notOnSales';
      }

      // this.productClasses = {
      //   "onSales": this.checkStockAvailable(this.products[i].stockAvailable),
      //   "notOnSales": this.checkStockAvailable(this.products[i].stockAvailable)
      // };

      console.log(JSON.stringify(i));
    }

    console.log(JSON.stringify(this.products));
    console.log(JSON.stringify(this.qty));
  }

  updateQuantity(product: Product, quantity: number) {
    product.quantity = product.quantity + quantity;

  }

  // addQuantity(event, product: Product) {
  //   console.log('Add 1 quantity for this product', event, product);

  //   //if (this.product.quantity != 10) {
  //   product.quantity = product.quantity + 1;
  //   //}

  //   this.isDisable = this.checkCurrentQuantity(product.quantity);
  //   console.log(JSON.stringify(product.quantity));
  // }

  // deductQuantity(event, product: Product) {
  //   console.log('deduct 1 quantity for this product', event);

  //   //if (this.product.quantity != 0) {
  //   product.quantity = product.quantity - 1;
  //   //}

  //   this.isDisable = this.checkCurrentQuantity(product.quantity);
  //   console.log(JSON.stringify(product.quantity));
  // }

  checkCurrentQuantity(quantity: number) {
    if (quantity < 0 || quantity >= 10) {
      return true;
    }
    else {
      return false;
    }
    // this.product.quantity < 0 || this.product.quantity >= 10 : true : false;
  }

  checkStockAvailable(quantity: number) {
    if (quantity > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  checkStockByCode(index, product) {
    return product.code;
  }


}
