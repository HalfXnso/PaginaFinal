import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WcService {
  private miVariableSubject = new BehaviorSubject<string>(''); // Valor inicial vacío
  miVariable$ = this.miVariableSubject.asObservable(); // Observable para que los componentes se suscriban

  constructor() {}

  // Setter: Actualiza el valor en el BehaviorSubject
  setMiVariable(valor: string): void {
    this.miVariableSubject.next(valor);
  }

  // Getter: Obtiene el valor actual del BehaviorSubject
  getMiVariable(): string {
    return this.miVariableSubject.getValue();
  }
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
  async getProductoByName(valor: string) {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${valor}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
}
