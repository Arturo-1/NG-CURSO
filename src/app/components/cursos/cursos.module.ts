import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { NgMaterialModule } from 'src/app/ng-material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditCursoComponent } from './edit-curso/edit-curso.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { AddCursoComponent } from './add-curso/add-curso.component';


@NgModule({
  declarations: [
    
    EditCursoComponent,
    DetalleCursoComponent,
    AddCursoComponent
    
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CursosModule { }
