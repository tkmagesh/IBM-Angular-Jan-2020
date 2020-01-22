import { Component } from '@angular/core';

@Component({
    selector : 'app-products',
    template : `
        <h3>Products</h3>
        <hr>
        <label>Product Name :</label>
        <input type="text" />
        <input type="button" value="Add New" />
        <ol>
           <li *ngFor="let product of productsList">{{product}}</li>
        </ol>
    `
})
export class ProductsComponent{
    productsList : string[] = [
    ]
}