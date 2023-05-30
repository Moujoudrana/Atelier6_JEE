import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public products:Array<Product>=[];
  public keyword:string="";
  constructor(private productService:ProductService) {
  }


  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProducts(1,3).subscribe({
      next:data=>{
        this.products=data;
      },
      error:err=>{
        console.log(err);
      }
    })
    //this.products$=this.productService.getProducts();
  }
  handleCheckProduct(product: Product) {
    this.productService.checkProducts(product).subscribe({
      next:updateProduct=>{
        product.checked=!product.checked;
        //this.getProduct();
      }
    })

  }

  handleDelete(product: Product) {
    if(confirm("ETES VOUS SURE?"))
    this.productService.deleteProduct(product).subscribe({
      next:value => {
        this.products=this.products.filter(p=>p.id!=product.id);

      }
    })

  }

  searchProducts() {
    this.productService.searchProducts(this.keyword).subscribe({
      next:value => {
        this.products=value;
      }
    })
  }
}
