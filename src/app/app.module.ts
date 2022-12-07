import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnnonceAppRoutingModule } from './annonce/annonce-app-routing.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitComponent } from './produit/produit.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { ProduitCardComponent } from './produit-card/produit-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProduitComponent,
    HomeComponent,
    PagenotfoundComponent,
    DetailComponent,
    AddProduitComponent,
    ProduitCardComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AnnonceModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
