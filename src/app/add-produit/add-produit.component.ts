import { Component, OnInit } from '@angular/core';
import { Product } from './../model/Product';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  product :Product={
    id: 1,
    title:"",
    price: null,
    quantity:0,
    like:0
};
  constructor() { }

  ngOnInit(): void {

  }

  addProduct(){
    console.log(this.product);

  }

}
