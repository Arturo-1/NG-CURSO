import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlumnoComponent } from "./components/alumno/alumno.component";
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CursosComponent } from './components/cursos/cursos.component';
// import { HomeComponent } from './components/home/home.component';
import { CursosModule } from './components/cursos/cursos.module';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [

    {
      path:'components',
      loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
    },
    {
      path:'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
      path:'**',
      redirectTo: 'auth'
    }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}

  ngOnInit(): void {
  }
}