import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './../model/Product';
import { ProduitCardComponent } from './../produit-card/produit-card.component';
import { CalculService } from './../services/calcul.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit, AfterViewInit {

  @ViewChild(ProduitCardComponent)
  private produitCardComponent!: ProduitCardComponent;
  listProdcut: Product[] = [];
  priceMax: number;
  parentText = "Parent Text"
  zeroStock: number
  constructor(private calculService: CalculService) { }

  ngOnInit(): void {
    this.listProdcut = [
      { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
      { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
      { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 },
    ]
  }

  ngAfterViewInit(): void {

  }

  likeProduit(produit: Product) {
    console.log("likes from Parent");

    let i = this.listProdcut.indexOf(produit)
    this.listProdcut[i].like++
  }

  startParent() {
    console.log("Executing child function with View Child");

    this.produitCardComponent.start()
    this.parentText = this.produitCardComponent.childText
  }
  getZeroStock() {
    this.zeroStock = this.calculService.getNumberOf(this.listProdcut, "quantity", 0)
  }
}
