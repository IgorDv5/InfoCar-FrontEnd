import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';


@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.css']
})
export class CarroCreateComponent implements OnInit {

    carro: Carro = {
    id: '',
    marca: '',
    modelo: '',
    placa: '',
    anoFabricacao: '',
    chassi: '',
    cavalaria: ''
  }

  marca: FormControl = new FormControl(null, Validators.minLength(3));
  modelo: FormControl = new FormControl(null, Validators.required);
  placa: FormControl = new FormControl(null, Validators.required);
  anoFabricacao: FormControl = new FormControl(null, Validators.required);
  chassi: FormControl = new FormControl(null, Validators.required);
  cavalaria: FormControl = new FormControl(null, Validators.required);

  constructor(private service: CarroService,
   private toast: ToastrService,
   private router: Router) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.marca.valid && this.modelo.valid &&
    this.placa.valid && this.anoFabricacao.valid &&
    this.chassi.valid && this.cavalaria.valid
  }

  anoValido():boolean {
    if(this.carro.anoFabricacao <= 1899 || this.carro.anoFabricacao >2025){
      this.toast.error('Insira um Ano Valido','Validação');
      return false;
    }
    return true;
  }

  create() {
    if (!this.anoValido()) {
      return; 
    }
  
    this.service.create(this.carro).subscribe(() => {
      this.toast.success('Carro Cadastrado No Sistema Com Sucesso!', 'Cadastro');
      this.router.navigate(['/carros']);
    }, ex => {
      if (ex.error.erros) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    });
  }

  }

