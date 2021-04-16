import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'}, 
  {path:'usuarios', component: UsuariosComponent},
  {path:'funcionarios', component: FuncionariosComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
