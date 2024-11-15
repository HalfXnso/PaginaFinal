import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WcService {
  constructor() {}

  async getInfo() {
    const response = await fetch('https://dummyjson.com/products?limit=0');
    const data = await response.json();
    console.log(data);
    return data;
  }

  async getCategoriesProducts(categoria: string) {
    const response = await fetch(
      `https://dummyjson.com/products/category/${categoria}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  async getProductoById(id: number) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

}
