import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "agenda", component: ListUsersComponent },
  { path: "new-user", component: FormularioComponent },
  { path: "user/:iduser", component: ViewUserComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
