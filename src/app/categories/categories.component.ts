import { Component, OnInit } from '@angular/core';
import { WcService } from '../wc.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: any;
  filteredCategories: any[] = []; // Lista filtrada que se mostrará
  valor: string = ''; // Valor del input
  constructor(private datos: WcService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.datos.miVariable$.subscribe((nuevoValor) => {
      this.valor = nuevoValor;

      this.route.paramMap.subscribe((params) => {
        const valorParam = params.get('nombre');
        // this.valor = valorParam ? +valorParam : '';
        // console.log(this.id);
        console.log(valorParam);
        if (valorParam) {
          this.getCategorie(this.valor, valorParam);
        }
      });
    });
  }

  // Método que obtiene los productos
  async getCategorie(valor: string, category: string) {
    const data = await this.datos.getCategoriesProducts(category);
    const titles = [];
    if (valor === '') {
      this.categories = data.products;
    } else {
      for (let product of data.products) {
        if (product.title.toLowerCase().includes(valor.toLowerCase())) {
          titles.push(product); // Añadir el título del producto al array
          this.categories = titles;
        }
      }
    }
  }
}
