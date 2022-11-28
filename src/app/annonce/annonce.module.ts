import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { AnnonceAppRoutingModule } from './annonce-app-routing.module';
import { AnnonceComponent } from './annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';


@NgModule({
  declarations: [
    ListComponent,
    AnnonceComponent,
    AddAnnonceComponent
  ],
  imports: [
  CommonModule,
  AnnonceAppRoutingModule
  ]
})
export class AnnonceModule { }
