import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  ELEMENT_DATA: Usuario[] = [
    {
    id: '1',
    nome: 'igor',
    cpf: '12345678910',
    email: 'igor@gmail.com',
    senha: '123',
    dataNascimento: null,
    funcao: 'Cliente'
  },
  {
    id: '2',
    nome: 'roberto',
    cpf: '12345678910',
    email: 'roberto@gmail.com',
    senha: '123',
    dataNascimento: null,
    funcao: 'Cliente'
  }
]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','funcao','acoes'];
  dataSource = new MatTableDataSource<Usuario>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}



