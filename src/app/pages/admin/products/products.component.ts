import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/products/product.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,MatTooltipModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean= false;
  productObj: any = {
    "productId": 0,
    "sku": "",
    "name": "",
    "price": 0,
    "shortName": "",
    "description": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryName": " ",
    "imageUrl": ""
  };
  categoryList: any  = [];
  productsList: any = [];

  constructor(private productSrv: ProductService) {
    
  }
  ngOnInit(): void {
    this.getProducts();
    this.getALlCategory();
  }
  getProducts() {
    this.productSrv.getProducts().subscribe((res:any)=>{
      this.productsList = res.data;
    })
  }

  getALlCategory() {
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }
  // onUpdate() {
  //   this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result) {
  //       alert("Product Created");
  //       this.getProducts();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }
  // onSave() {
  //   this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result) {
  //       alert("Product Updated");
  //       this.getProducts();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }
  // onDelete(item: any) {
  //   const isDelete = confirm('Are you Sure want to delte');
  //   if(isDelete) {
  //     this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
  //       debugger;
  //       if(res.result) {
  //         alert("Product Deleted");
  //         this.getProducts();
  //       } else { 
  //         alert(res.message) 
  //       }
  //     })
  //   }
  // }

  onEdit(item: any) {
    this.productObj = item;
    this.openSidePanel();
  } 


  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

}
