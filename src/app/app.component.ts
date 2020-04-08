import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  styleVar:object
  //ngStyle to create as a variable which can modify styles in ts

  ngOnInit():void{
    this.styleVar={
      backgroundColor:"green"
    }
  }
}
