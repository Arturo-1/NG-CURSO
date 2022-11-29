import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ContenidoComponent } from "./contenido/contenido.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContenidoComponent,
    FooterComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


