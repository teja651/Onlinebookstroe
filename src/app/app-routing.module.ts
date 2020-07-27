import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatebookComponent } from './createbook/createbook.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { EditbookComponent } from './editbook/editbook.component';
import { CatlistComponent } from './catlist/catlist.component';


const routes: Routes = [
{path:'addbook',component:CreatebookComponent},
{path:'showitems',component:ShoppingcartComponent},
{path:'editbook/:id',component:EditbookComponent},
{path:'catbook/:cat',component:CatlistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
