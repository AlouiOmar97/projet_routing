import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
const ROUTES: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "produit/detail/:id", component: DetailComponent },
  { path: "produit/edit/:id", component: EditProduitComponent },
  { path: "produit/add", component: AddProduitComponent },
  { path: "produit", component: ProduitComponent },
  { path: "todo", component: ToDoListComponent },
  { path: "**", component: PagenotfoundComponent }
]
@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
