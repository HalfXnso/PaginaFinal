import { Component, OnInit } from '@angular/core';
import { WcService } from '../wc.service';
import { routes } from '../app.routes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  constructor(private miServicio: WcService, private route: ActivatedRoute) {}
  id: number = 0;
  hayDato: boolean = false;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : 0;
      this.miServicio.displaySearchBar$.subscribe((valor) => {
        this.hayDato = valor || !!this.id;
        console.log('Hay dato? ' + this.hayDato);
      });
    });
  }

  actualizarValor(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.miServicio.setMiVariable(valor); // Actualiza el valor en el servicio
  }
}
