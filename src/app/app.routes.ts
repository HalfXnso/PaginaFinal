import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductosComponent } from './categorias/productos/productos.component';
export const routes: Routes = [
  { path: '', component: MainComponentComponent, },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'products/:id',
    component: ProductosComponent
  },
];
