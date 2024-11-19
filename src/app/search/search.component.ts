import { Component } from '@angular/core';
import { WcService } from '../wc.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private miServicio: WcService) {}

  actualizarValor(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.miServicio.setMiVariable(valor); // Actualiza el valor en el servicio
  }
}
