import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carro-delete',
  templateUrl: './carro-delete.component.html',
  styleUrls: ['./carro-delete.component.css']
})
export class CarroDeleteComponent implements OnInit {

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

  delete() {
    this.service.delete(this.carro.id).subscribe(() => {
      this.toast.success('Carro Deletado Do Sistema Com Sucesso!', 'Delete');
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

