import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions:Array<any>=[
    {title:"Home",route:"/home",icons:"house"},
    {title:"Products",route:"/products",icons:"search"},
    {title:"New Product",route:"/newProduct",icons:"safe"}

  ];
  currentAction:any;

  setCurrenyAction(action: any) {
    this.currentAction=action;

  }
}
