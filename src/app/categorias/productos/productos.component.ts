import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WcService } from '../../wc.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  constructor(private route: ActivatedRoute, private wc: WcService) {}
  id: number = 0;
  product: any;
  ngOnInit(): void {
    this.wc.setMiBoolean(false)
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : 0;

      if (this.id) {
        this.getItemsById(this.id);
      }
    });
  }
  async getItemsById(id: number) {
    const data = await this.wc.getProductoById(id);
    this.product = data;
    console.log(this.product);
  }
}
