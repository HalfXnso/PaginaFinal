import { Component, OnInit } from '@angular/core';
import { WcService } from '../wc.service';
import {NgFor, NgIf} from '@angular/common';
@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent implements OnInit {
  constructor(private datos: WcService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  products: any[] = [];
  title = 'PaginaFinal';
  productos: any;
  async getProducts() {
    const data = await this.datos.getInfo();
    this.productos = data.products;
    console.log(this.productos)
  }
}
