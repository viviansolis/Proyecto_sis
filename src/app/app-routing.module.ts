import { MenuComponent } from './components/template/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarComponent } from './components/roles/listar/listar.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'menu', component:MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
