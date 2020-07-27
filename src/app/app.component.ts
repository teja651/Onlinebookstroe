import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category:string;

  constructor(private router:Router){}


  display()
  {
    console.log(this.category);
    this.router.navigate(['/catbook',this.category]);
  }


}
