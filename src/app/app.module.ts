import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './components/login/username/username.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { RolService } from './services/rol.service';
import { AuthService } from './services/auth.service';
import { ProductoService } from './services/producto.service';
import { ListarasocComponent } from './components/listarasoc/listarasoc.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { AsociacionService } from './services/asociacion.service';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    MenuComponent,
    FooterComponent,
    ListarComponent,
    LoginComponent,
    ProductoComponent,
    SolicitudComponent,
    ListarasocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RolService,AuthService,ProductoService, AsociacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
