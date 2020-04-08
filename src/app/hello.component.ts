import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 class="child">1) Styles in decorator</h1> 
  <p style="color:blue"> 2) Tag Styles</p>`,
 // 2) Tag styles
  styles: [`h1 { font-family: Lato;background-color:orange;}
  
  :host{
margin:10px;
border:10px solid ;
  }
  :host-context(.backg){
    display:block;
    background-color:red;
  }
   `]
  // 1) Component styles
})
export class HelloComponent  {
  @Input() name: string;
}
