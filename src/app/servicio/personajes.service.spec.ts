import { TestBed } from '@angular/core/testing';

import { PersonajesService } from './personajes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

const listPersonaje:any = [ {name: 'Summer Smith', gender: "Female"}, 
                            {name: 'Rick Sanchez', gender: "Male"}];

describe('PersonajesService', () => {
  let service: PersonajesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PersonajesService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(PersonajesService);
  });
  beforeEach(() => {
    service = TestBed.inject(PersonajesService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach( () => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('listarPersonajes return list and does a get method', () => {
    service.listarPersonajes().subscribe( (resp: any[]) =>{
        expect(resp).toEqual(listPersonaje);
    });

    const req = httpMock.expectOne('https://rickandmortyapi.com/api/character');
    expect(req.request.method).toBe('GET');
    req.flush(listPersonaje);
  });
  it('busquedas return list and does a get method', () => {
    service.busquedas().subscribe( (resp: any[]) =>{
        expect(resp).toEqual(listPersonaje);
    });

    const req = httpMock.expectOne('https://rickandmortyapi.com/api/location');
    expect(req.request.method).toBe('GET');
    req.flush(listPersonaje);
  });
});
