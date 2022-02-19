import { Component, OnInit } from '@angular/core';
import { BienvenidaService } from '../servicio/bienvenida.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  datosBienvenida: any;

  constructor(private bienService: BienvenidaService) { 
    this.mostrarBienvenida();
  }

  ngOnInit(): void {
  }
  mostrarBienvenida(){
    this.bienService.bienvenida().subscribe({
      next: (r) => {
        this.datosBienvenida = r;
        console.log(this.datosBienvenida)
      },
      error: (e) => console.log(JSON.stringify(e))
    });
  }
}
