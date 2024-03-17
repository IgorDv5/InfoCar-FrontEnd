import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})
export class CarroListComponent implements OnInit {

  ELEMENT_DATA: Carro[] = [];

  displayedColumns: string[] = [
    "id",
    "marca",
    "modelo",
    "placa",
    "anoFabricacao",
    "acoes",
  ];

  dataSource = new MatTableDataSource<Carro>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: CarroService) { }

  ngOnInit(): void {
    this.findAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Carro>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

}


