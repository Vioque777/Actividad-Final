import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../servicio/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any;

  constructor(private perSevice: PersonajesService) {
      this.listarPersonaje();
   }

  ngOnInit(): void {
  }
  listarPersonaje(): void {
    this.perSevice.listarPersonajes().subscribe({
      next: (r) => {
        this.personajes = r.results;
        console.log(this.personajes.results);
      },
      error: (e) => console.log(JSON.stringify(e))
    });
    
  }

  
}
