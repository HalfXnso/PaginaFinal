import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WcService } from './wc.service';
import { CategoriesComponent } from "./categories/categories.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
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
