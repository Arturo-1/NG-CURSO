import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng-material.module';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { TheadTableDirective } from './directivas/thead-table.directive';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MenuLateralComponent } from './Layout/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './Layout/toolbar/toolbar.component';
import { ContenidoComponent } from './Layout/contenido/contenido.component';


@NgModule({
  declarations: [
   ComponentsComponent,
   FooterComponent,
   MenuLateralComponent,
   ToolbarComponent,
 
   
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
