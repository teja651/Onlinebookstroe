import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HttpClient } from '@angular/common/http';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {

  ngOnInit(): void {
  }

  
  imageName: any;
  retrievedImage: any;
  selectedFile: File;
  message: string;
  retrieveResonse: any;
  book: Book = new Book();
  base64Data: any;
  alert:boolean=false;
  constructor(private httpClient: HttpClient, private bookService: BookServiceService) { }





  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }





  onUpload() {




    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    uploadImageData.append('book', JSON.stringify(this.book));



    this.bookService.addBook(uploadImageData).subscribe((response) => {
      if (response.status === 200) {
        this.alert=true;

      }
      else {
        this.message = 'Image not uploaded successfully';
      }

    });



  }

  closeAlert()
  {
    this.alert=false;
  }


  getImage() {

    this.httpClient.get('http://localhost:8042/get/' + this.imageName)
      .subscribe(
        res => {

          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.icon;

          this.retrievedImage = 'data:image/jpg;base64,' + this.base64Data;
        }
      );
  }








}
