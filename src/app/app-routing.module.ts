import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  {path: '', component:HeaderComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: 'usuarios', component: UsuarioListComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
