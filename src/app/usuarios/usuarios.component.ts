import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

title = "Usuarios";

public usuarios = [
    {id:1 , nome:"Douglas", sobrenome: "Souza"},
    {id:1 , nome:"Ana", sobrenome: "Clara"},
    {id:1 , nome:"Fernando", sobrenome: "Algusto"},   
];

  constructor() { }

  ngOnInit(): void {
  }

}
