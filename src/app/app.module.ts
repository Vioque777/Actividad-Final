import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { BusquedaPersonajesComponent } from './busqueda-personajes/busqueda-personajes.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonajesService } from './servicio/personajes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [
  {path:'',component:PersonajesComponent},
  {path:'seccion1',component:PersonajesComponent},
  {path:'seccion2',component:BusquedaPersonajesComponent},
  {path:'**',component:PersonajesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    PersonajesComponent,
    BusquedaPersonajesComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
    
  ],
  providers: [
    PersonajesService
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
