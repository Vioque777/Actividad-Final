import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BienvenidaComponent } from './bienvenida.component';
import { BienvenidaService } from '../servicio/bienvenida.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('BienvenidaComponent', () => {
  let component: BienvenidaComponent;
  let fixture: ComponentFixture<BienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule              
    ],
      declarations: [ 
        BienvenidaComponent 
      ],
      providers: [
        BienvenidaService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('mostrarBienvenida', () => {
    const service = fixture.debugElement.injector.get(BienvenidaService);
    const listPersonaje: any[]=[];
    const spy1 = spyOn(service, 'bienvenida').and.returnValue(of(listPersonaje));
    component.mostrarBienvenida();
    expect(spy1).toHaveBeenCalled();
    expect(component.datosBienvenida.length).toBe(0);
  });
});
