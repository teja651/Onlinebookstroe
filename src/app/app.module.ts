import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookServiceService } from './book-service.service';
import { CreatebookComponent } from './createbook/createbook.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { EditbookComponent } from './editbook/editbook.component';
import { CatlistComponent } from './catlist/catlist.component';
import { DisplayImComponent } from './display-im/display-im.component';




@NgModule({
  declarations: [
    AppComponent,
    CreatebookComponent,

    ShoppingcartComponent,
    EditbookComponent,
    CatlistComponent,
    DisplayImComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BookServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
