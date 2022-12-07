import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../model/Product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css']
})
export class ProduitCardComponent implements OnInit, OnChanges {
  childText="Text from child Component"
  @Input() prod: Product={
    id: 1,
    title:"",
    price: null,
    quantity:0,
    like:0
};
  @Input() maxPrice: number;
  private _modifiedPrice:number;
  @Input()
  set modifiedPrice(mp:number){
    this._modifiedPrice=mp+1;
  }
  get modifiedPrice():number{return this._modifiedPrice}


  @Output() likesEvent=new EventEmitter<Product>();
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
  console.log(changes);
  this.toastr.success('Previous value: '+changes.maxPrice.previousValue, 'Changes detected!' );
  }

  likeProd(){
    console.log("likes from Child");

    this.likesEvent.emit(this.prod)
  }

  start(){
    console.log("Child function executed from Parent.");

  }

}
