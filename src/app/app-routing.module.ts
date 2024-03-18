import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit/usuario-edit.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { CarroListComponent } from './components/carro/carro-list/carro-list.component';
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';
import { CarroEditComponent } from './components/carro/carro-edit/carro-edit.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';



const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: '',component: HeaderComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},

      {path: 'usuarios', component: UsuarioListComponent},
      {path: 'usuarios/create', component: UsuarioCreateComponent},
      {path: 'usuarios/edit/:id', component: UsuarioEditComponent},
      {path: 'usuarios/delete/:id', component: UsuarioDeleteComponent},

      {path: 'carros', component: CarroListComponent},
      {path: 'carros/create', component: CarroCreateComponent},
      {path: 'carros/edit/:id', component: CarroEditComponent},
      {path: 'carros/delete/:id', component: CarroDeleteComponent}
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
