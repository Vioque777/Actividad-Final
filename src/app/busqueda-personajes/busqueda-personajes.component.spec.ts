import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPersonajesComponent } from './busqueda-personajes.component';

xdescribe('BusquedaPersonajesComponent', () => {
  let component: BusquedaPersonajesComponent;
  let fixture: ComponentFixture<BusquedaPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPersonajesComponent ]
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
});
