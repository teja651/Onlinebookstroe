import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  ngOnInit(): void {
  }


  retrieveResponse: any;
  base64Data: string[] = [];
  retrievedImage: string[] = [];
  isDataReady: boolean = false;
  k: number = 0;
  alert:boolean=false;
  bookId:number;
  constructor(private httpClient: HttpClient,private router:Router) {

    this.httpClient.get('http://localhost:8042/get/')
      .subscribe(
        res => {

          this.retrieveResponse = res;


          for (this.k = 0; this.k < this.retrieveResponse.length; this.k++) {
            this.base64Data[this.k] = this.retrieveResponse[this.k].icon;

            this.retrievedImage[this.k] = 'data:image/jpg;base64,' + this.base64Data[this.k];



          }


          this.isDataReady = true;
          //console.log(this.base64Data);

        }
      );
  }

  delete(bookId:number)
  {
    this.bookId=bookId;
    if(confirm("Are you sure u want to delete book with id <"+bookId+">"))
    {
        
        

        this.httpClient.delete("http://localhost:8042/delete/"+bookId);
        this.alert=true;

        
        
    }

  }
  closeAlert()
  {
    this.alert=false;
  }

  editpage(bookId:number)
  {
    this.router.navigate(['/editbook',bookId]);

  }

}
