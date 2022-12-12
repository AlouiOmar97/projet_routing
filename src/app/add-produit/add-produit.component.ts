import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from './../model/Product';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  product: Product = {
    id: null,
    title: "",
    price: null,
    quantity: 0,
    like: 0
  };
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  addProduct() {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(res => {
      console.log("Product created");
      this.router.navigateByUrl("/produit")

    })
  }

}
