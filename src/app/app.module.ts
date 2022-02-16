import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { BusquedaPersonajesComponent } from './busqueda-personajes/busqueda-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    PersonajesComponent,
    BusquedaPersonajesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
