import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor() { }
  title = 'Funcionarios';
  funcionarios = [
    {id: 1, nome: 'Ana', sobrenome:'Cristina', telefone:'(11)1111-1111'},
    {id: 2, nome: 'José',sobrenome:'Carlos', telefone:'(11)1111-1111'},
    {id: 3, nome: 'Josué',sobrenome:'Camilo', telefone:'(11)1111-1111'} 
    ];
  ngOnInit(): void {
  }

}
