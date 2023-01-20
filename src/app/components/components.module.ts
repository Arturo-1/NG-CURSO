import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng-material.module';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { TheadTableDirective } from './directivas/thead-table.directive';

@NgModule({
  declarations: [
   ComponentsComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgMaterialModule,
    ComponentsRoutingModule
  ],
  exports:[
    ComponentsComponent
  ]
})
export class ComponentsModule { }
