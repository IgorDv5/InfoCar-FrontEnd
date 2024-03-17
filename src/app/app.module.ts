import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { UsuarioEditComponent } from './components/usuario/usuario-edit/usuario-edit.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsuarioListComponent,
    LoginComponent,
    UsuarioCreateComponent,
    UsuarioEditComponent,
    UsuarioDeleteComponent,
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut: 4000,
        closeButton: true,
        progressBar: true
      }
    ),
    NgxMaskModule.forRoot(),

  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
