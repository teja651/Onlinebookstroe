import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  message :string;

  constructor(private httpClient:HttpClient) { }

  public addBook(uploadImageData:FormData):any
  {
   
    return this.httpClient.post('http://localhost:8042/addbook', uploadImageData, { observe: 'response' });
    
      
    
  }

  public updateBook(uploadImageData:FormData):any
  {
   
    return this.httpClient.post('http://localhost:8042/updatebook', uploadImageData, { observe: 'response' });
    
      
    
  }








}
