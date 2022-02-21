import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BienvenidaService } from './bienvenida.service';

const usuario:any = [ {name: 'Summer Smith', gender: "Female"}];

describe('BienvenidaService', () => {
  let service: BienvenidaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BienvenidaService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(BienvenidaService);
  });
  beforeEach(() => {
    service = TestBed.inject(BienvenidaService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach( () => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('bienvenida return list and does a get method', () => {
    service.bienvenida().subscribe( (resp: any[]) =>{
        expect(resp).toEqual(usuario);
    });

    const req = httpMock.expectOne('http://localhost:3000/usuario');
    expect(req.request.method).toBe('GET');
    req.flush(usuario);
  });
});
