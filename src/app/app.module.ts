import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* siempre que queramos hacer peticiones a una api necesitamos el module de httpClientModule */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CardUserComponent,
    ViewUserComponent,
    HomeComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
