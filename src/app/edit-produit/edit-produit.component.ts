import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from './../model/Product';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  id: number
  product: Product = {
    id: null,
    title: "",
    price: null,
    quantity: 0,
    like: 0
  };
  constructor(private activateRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
    this.productService.getProductById(this.id).subscribe((data: Product) => {
      this.product = data
    })
  }

  editProduct() {

    this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
      console.log("Product updated");
      this.router.navigateByUrl("/produit")

    })

  }

}
