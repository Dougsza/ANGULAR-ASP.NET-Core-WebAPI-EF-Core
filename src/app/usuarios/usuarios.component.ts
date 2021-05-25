import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';


//Importa a classe Usuarios dentro da pasta Models
import { Usuarios } from '../models/Usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
//Variaveis
title = "Usuarios";
public usuarioForms: FormGroup;
//Usuarios selected da classe Usuarios
public usuariosSelected: Usuarios;
public simpleText: string;

//Usuario com objetos dentro
public usuarios = [
    {id:1 , nome:"Douglas", sobrenome: "Souza", email: "dougzasilva@gmail.com"},
    {id:1 , nome:"Ana", sobrenome: "Clara", email: "anaclara@outlook.com"},
    {id:1 , nome:"Fernando", sobrenome: "Algusto", email: "augustfer@bol.com"},   
];

constructor(private fb: FormBuilder) {
  this.createForm();
}

ngOnInit(): void {

}
createForm(){
  //Agrupador de campos
  this.usuarioForms = this.fb.group({
    nome: ['',Validators.required],
    sobrenome: ['',Validators.required],
    email: ['',Validators.required]
  });
}

usuarioSubmit(){ 
  console.log(this.usuarioForms.value);
}

usuariosSelect(usuario: Usuarios){
    this.usuariosSelected = usuario;
    //O patchValue verifica se cada propriedade é igual a do usuariosForms
    this.usuarioForms.patchValue(usuario);
}

voltar(){
    //Returna o tipo null para a função
    this.usuariosSelected = null;
}

}
