import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudDocenteComponent } from './components/crud-docente/crud-docente.component';
import { CrudDocenteAdicionarComponent } from './components/crud-docente-adicionar/crud-docente-adicionar.component';
import { CrudDocenteActualizarComponent } from './components/crud-docente-actualizar/crud-docente-actualizar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';

@NgModule({
  declarations: [
    AppComponent,
    CrudDocenteComponent,
    CrudDocenteAdicionarComponent,
    CrudDocenteActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
