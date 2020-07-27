import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HttpClient } from '@angular/common/http';
import { BookServiceService } from '../book-service.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  ngOnInit(): void {
  }

  alert:boolean=false;
  imageName: any;
  retrievedImage: any;
  selectedFile: File;

  message: string;
  retrieveResonse: any;
  book: Book = new Book();
  base64Data: any;
  id:string;
  editedImage:any;
  

  


  constructor(private httpClient: HttpClient, private bookService: BookServiceService,private route:ActivatedRoute) {

      

      this.id = this.route.snapshot.paramMap.get('id');


    this.httpClient.get('http://localhost:8042/getbook/' + this.id)
    .subscribe(
      res => {


        this.retrieveResonse = res;

        this.book = this.retrieveResonse;

        this.base64Data = this.retrieveResonse.icon;
   
        console.log(this.retrieveResonse);

        this.retrievedImage = 'data:image/jpg;base64,' + this.base64Data;

        fetch(this.retrievedImage)
          .then(res => res.blob())
              .then(blob => {
            this.selectedFile = new File([blob], "File name",{ type: "image/png" })
  })

        
      }
    );







   }

    




  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File


    this.selectedFile = event.target.files[0];

    var reader = new FileReader();

      reader.onload=()=>{ this.retrievedImage=reader.result;console.log(this.retrievedImage);}

    reader.readAsDataURL(this.selectedFile);
    
  }



  closeAlert()
  {
    this.alert=false;
  }



  editImage() {

   


    const uploadImageData = new FormData();

    console.log(this.selectedFile);

    uploadImageData.append('imageFile', this.selectedFile);

    uploadImageData.append('book', JSON.stringify(this.book));

    uploadImageData.append('id',this.id);

    console.log(this.book);

    this.bookService.updateBook(uploadImageData).subscribe((response) => {
      if (response.status === 200) {
        this.alert = true;

      }
      else {
        this.message = 'Unable to edit Image';
      }

    });



  }



}
