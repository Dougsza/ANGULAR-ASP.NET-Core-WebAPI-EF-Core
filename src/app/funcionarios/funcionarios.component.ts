import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from '../models/Funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
 
  title = 'Funcionarios';
  public funcionarioForms: FormGroup;
  public funcionarioSelected : Funcionario;
  public simpleText :string;

  funcionarios = [
    {id: 1, nome: 'Ana', sobrenome:'Cristina', cargo:'Programador', telefone:'(11)1111-1111'},
    {id: 2, nome: 'José',sobrenome:'Carlos', cargo:'Analista', telefone:'(11)1111-1111'},
    {id: 3, nome: 'Josué',sobrenome:'Camilo', cargo: 'Estagiário', telefone:'(11)1111-1111'} 
    ];
ngOnInit(): void {
}

constructor(private fb: FormBuilder) {
  this.createForm();
} 
createForm(){
  this.funcionarioForms = this.fb.group({
    nome:['', Validators.required],
    sobrenome:['',Validators.required],
    cargo:['',Validators.required],
    telefone:['',Validators.required]
  });
}
funcionarioSubmit(){
  console.log(this.funcionarioForms.value);
}

  funcionarioSelect(funcionario : Funcionario){
    this.funcionarioSelected = funcionario;
    this.funcionarioForms.patchValue(funcionario);
  }
  voltar(){
    //Returna o tipo null para a Variavel
    this.funcionarioSelected = null;
  }

}
