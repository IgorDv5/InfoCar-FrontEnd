import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carro-edit',
  templateUrl: './carro-edit.component.html',
  styleUrls: ['./carro-edit.component.css']
})
export class CarroEditComponent implements OnInit {

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
   private router: Router,
   private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.carro.id = this.route.snapshot.paramMap.get("id");
    this.findById();
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

  
  findById(): void {
    this.service.findById(this.carro.id).subscribe((resposta) => {
      this.carro = resposta;
    });
  }

  update() {
    if (!this.anoValido()) {
      return; 
    }
  
    this.service.update(this.carro).subscribe(() => {
      this.toast.success('Carro Atualizado No Sistema Com Sucesso!', 'Atualização');
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
