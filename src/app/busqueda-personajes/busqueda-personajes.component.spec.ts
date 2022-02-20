import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BusquedaPersonajesComponent } from './busqueda-personajes.component';
import { PersonajesService } from '../servicio/personajes.service';
import { of } from 'rxjs';
import { AppModule } from '../app.module';

const personajeService = {
  llenarLocalizacion: () => of([]),
  fitrarLocalizacionllenarLocalizacion: () => of([]),
  buscar: (): any => of([{}]),
  // llenarLocalizacion: () => of([]),

};

describe('BusquedaPersonajesComponent', () => {
  let component: BusquedaPersonajesComponent;
  let fixture: ComponentFixture<BusquedaPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule,
        AppModule          
    ],
      declarations: [ 
        BusquedaPersonajesComponent 
      ],
      providers: [
        PersonajesService
        // {
        //   provide: PersonajesService,
        //   useValue: personajeService
        // } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('llenarLocalizacion', () => {
    const service = fixture.debugElement.injector.get(PersonajesService);
    const listPersonaje: any[]=[];
    const spy1 = spyOn(service, 'busquedas').and.returnValue(of(listPersonaje));
    component.llenarLocalizacion();
    expect(spy1).toHaveBeenCalled();
    expect(component.localizaciones.length).toBe(0);
  });
  it('fitrarLocalizacion', () => {
    const service = fixture.debugElement.injector.get(PersonajesService);
    const listPersonaje: any[]=[];
    const spy1 = spyOn(service, 'busquedas').and.returnValue(of(listPersonaje));
    component.fitrarLocalizacion();
    expect(spy1).toHaveBeenCalled();
    expect(component.busqueda.length).toBe(0);
  });
  it('buscar', () => {
    const service = fixture.debugElement.injector.get(PersonajesService);
    const listPersonaje: any[]=[];
    const spy1 = spyOn(service, 'busquedas').and.returnValue(of(listPersonaje));
    component.buscar();
    expect(spy1).toHaveBeenCalled();
    expect(component.busqueda.length).toBe(0);
  });
});
