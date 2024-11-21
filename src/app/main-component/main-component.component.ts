import { Component, OnInit } from '@angular/core';
import { WcService } from '../wc.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css',
})
export class MainComponentComponent implements OnInit {
  valor: string = '';
  products: any[] = [];
  title = 'PaginaFinal';
  productos: any;
  constructor(private datos: WcService) {}
  ngOnInit(): void {
    this.datos.setMiBoolean(true);
    this.datos.miVariable$.subscribe((nuevoValor) => {
      this.valor = nuevoValor;
      this.valor === ''
        ? this.getProducts()
        : this.getProductsByName(this.valor);
    });
  }

  async getProductsByName(valor: string) {
    const data = await this.datos.getProductoByName(valor);
    this.productos = data.products;
    console.log(this.productos);
  }

  async getProducts() {
    const data = await this.datos.getInfo();
    this.productos = data.products;
    console.log(this.productos);
  }
}
