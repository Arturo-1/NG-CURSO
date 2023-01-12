import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgMaterialModule } from "./ng-material.module";
import { CursosComponent } from './components/cursos/cursos.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { AddAlumnoComponent } from './components/modals/add-alumno/add-alumno.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MiCustomPipe } from './components/pipes/mi-custom.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalsComponent } from './components/modals/modals.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { TheadTableDirective } from "./components/directivas/thead-table.directive";
import { ToolbarComponent } from "./components/Layout/toolbar/toolbar.component";
import { FooterComponent } from "./components/Layout/footer/footer.component";
import { ContenidoComponent } from "./components/Layout/contenido/contenido.component";
import { MenuLateralComponent } from "./components/Layout/menu-lateral/menu-lateral.component";
import { AlumnoComponent } from "./components/alumno/alumno.component";




// import { NgMaterialModule } from "./ng-material.module";



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContenidoComponent,
    FooterComponent,
    MenuLateralComponent,
    LoginComponent,
    ModalsComponent,
    AddAlumnoComponent,
    MiCustomPipe,
    PipesComponent,
    TheadTableDirective,
    CursosComponent,
    AlumnoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    NgxToastNotifierModule.forRoot(), // NgxToastNotifierModule added
    MatSlideToggleModule,
    NgMaterialModule,
    MatDialogModule,
    MatButtonModule,
    NgbModule,
    MatFormFieldModule,
    PagesModule, 
    RouterModule,
    
  ],
  entryComponents:[ContenidoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

