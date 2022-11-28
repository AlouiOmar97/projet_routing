import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AnnonceComponent } from './annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';


const ROUTES: Routes=[
  {path:"annonce", component: AnnonceComponent,
  children: [
    {
        path:  'list',
        component: ListComponent
    },
    {
      path:  'add',
      component: AddAnnonceComponent
    },
]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)

  ],
  exports: [RouterModule]
})
export class AnnonceAppRoutingModule { }
