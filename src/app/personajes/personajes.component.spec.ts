import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PersonajesComponent } from './personajes.component';
import { PersonajesService } from '../servicio/personajes.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../app.module';
import { of } from 'rxjs';

const personajeService = {
  listarPersonajes: () => of([])
};

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule,
        AppModule             
    ],
      declarations: [ 
        PersonajesComponent
       ],
       providers: [  
          //  PersonajesService
           {
            provide: PersonajesService, //cuando se necesite UsuariosService use lo de abajo:
            useValue: personajeService
          }     
       ],
       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('listarPersonaje', () => {
    const service = fixture.debugElement.injector.get(PersonajesService);
    const listPersonaje: any[]=[];
    const spy1 = spyOn(service, 'listarPersonajes').and.returnValue(of(listPersonaje));
    component.listarPersonaje();
    expect(spy1).toHaveBeenCalled();
    expect(component.personajes.length).toBe(0);
  });
//   xit('listarPersonaje_v2', () => {
//     component.listarPersonaje();
//     expect(component.personajes.length).toBe(0);
//  });

});
