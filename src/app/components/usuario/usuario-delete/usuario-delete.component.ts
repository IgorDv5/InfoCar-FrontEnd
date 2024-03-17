import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {
  usuario: Usuario = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    dataNascimento: "",
    funcao: "",
  };

  constructor(
    private service: UsuarioService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  } 


  findById(): void {
    this.service.findById(this.usuario.id).subscribe((resposta) => {
      this.usuario = resposta;
    });
  }

  delete() {
    this.service.delete(this.usuario.id).subscribe(
      () => {
        this.toast.success("Usuario Deletado Com Sucesso!", "Delete");
        this.router.navigate(["/usuarios"]);
      },
      (ex) => {
        if (ex.error.erros) {
          ex.error.errors.forEach((element) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }
}