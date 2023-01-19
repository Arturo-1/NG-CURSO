import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { EditCursoComponent } from './edit-curso/edit-curso.component';


const routes: Routes = [
  {
  path: '',
  component: CursosComponent,
    children: [
      {
        path: 'editar',
        component: EditCursoComponent
      },
      {
        path: 'detalle',
        component: DetalleCursoComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class CursosRoutingModule { }
	
