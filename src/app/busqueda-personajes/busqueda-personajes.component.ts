import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonajesService } from '../servicio/personajes.service';

@Component({
  selector: 'app-busqueda-personajes',
  templateUrl: './busqueda-personajes.component.html',
  styleUrls: ['./busqueda-personajes.component.css']
})
export class BusquedaPersonajesComponent implements OnInit {

  formBusqueda:FormGroup = new FormGroup({
    nombrePlaneta: new FormControl('', [Validators.minLength(5)]),
    tipo: new FormControl('')
  });

  busqueda: any;
  buscarLocalizaciones: any = {name: '', type: ''};
  localizaciones: any[] = [];
  pageLocalizaciones: number = 1;

  constructor(private perSevice: PersonajesService) { 
    this.buscar();
    this.llenarLocalizacion();
    
  }

  ngOnInit(): void {
    
  }

  get f(){return this.formBusqueda.controls};

  llenarLocalizacion(){
    this.perSevice.busquedas().subscribe({
      next: (r) => {
        const loca: any = r.results.map((tipo: any) => {    
          return tipo.type;
        });
        
        // this.localizaciones = 
        loca.forEach( (elemento: any) => {
          if (!this.localizaciones.includes(elemento)) {
            this.localizaciones.push(elemento);
          }
        })
        
      },
      error: (e) => console.log(JSON.stringify(e))
    });
  }

  fitrarLocalizacion(){
    this.perSevice.busquedas().subscribe({
      next: (r) => {
        this.busqueda = r.results.filter( (loc: { name: any; type: any; }) => 
        loc.name === this.buscarLocalizaciones.name || loc.type === this.buscarLocalizaciones.type);
      },
      error: (e) => console.log(JSON.stringify(e))
    });
  }
  limpiar(){
    this.formBusqueda = new FormGroup({
      nombrePlaneta: new FormControl(''),
      tipo: new FormControl('')

    });
    this.buscar();
  }

  buscar(): void {
    this.perSevice.busquedas().subscribe({
      next: (r) => this.busqueda = r.results,
      error: (e) => console.log(JSON.stringify(e))
    });
    
  }

}
