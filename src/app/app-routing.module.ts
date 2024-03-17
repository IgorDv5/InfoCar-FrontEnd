import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit/usuario-edit.component';



const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',component: HeaderComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},

      {path: 'usuarios', component: UsuarioListComponent},
      {path: 'usuarios/create', component: UsuarioCreateComponent},
      {path: 'usuarios/edit', component: UsuarioEditComponent},
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
