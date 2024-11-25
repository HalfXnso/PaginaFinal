import { Component, OnInit } from '@angular/core';
import { WcService } from '../wc.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css',
})
export class LeagueComponent implements OnInit {
  constructor(private datos: WcService) {}
  products: any[] = [];
  ngOnInit(): void {
    this.getChamps(); // Llamar al servicio al cargar
  }

  async getChamps() {
    this.products = await this.datos.getChamps(); // Recibe el array de campeones
    console.log(this.products); // Verifica que sea un array
  }

  async getInfoChamps() {
    this.products = await this.datos.getChamps(); // Recibe el array de campeones
    console.log(this.products); // Verifica que sea un array
  }
}
