import { Component, OnInit } from '@angular/core';
import { WcService } from '../wc.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  constructor(private datos: WcService) {}
  ngOnInit(): void {
    this.getGroceries();
  }
  categories: any;
  async getGroceries() {
    const data = await this.datos.getCategoriesProducts('groceries');
    this.categories = data.products;
    console.log(this.categories);
  }

  async getVehicles() {
    const data = await this.datos.getCategoriesProducts('vehicle');
    this.categories = data.products;
    console.log(this.categories);
  }
  async getSmartPhones() {
    const data = await this.datos.getCategoriesProducts('smartphones');
    this.categories = data.products;
    console.log(this.categories);
  }
  async getLaptops() {
    const data = await this.datos.getCategoriesProducts('laptops');
    this.categories = data.products;
    console.log(this.categories);
  }
}
