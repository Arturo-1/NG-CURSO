import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlumnoComponent } from "./components/alumno/alumno.component";
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CursosComponent } from './components/cursos/cursos.component';

const routes: Routes = [
  {
    path:'alumnos',
    component: AlumnoComponent
  },
  {
    path:'cursos',
    component: CursosComponent
  },
  {
    path:'usuarios',
    component: UsuariosComponent
  },
  {
    path:'home',
    component: AlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
 
  ) 
  {
  
  }

  ngOnInit(): void {
    
  }
}