import { Component,  } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ComponentHernandezReyes";
  pruebaNumber:number=0;
  PruebaDiv:boolean=false
  
  constructor() { }

  ngOnInit(): void {
    
    
  }
  // funCambio(e:any){
  //   this.pruebaNumber = e;
  //   console.log("dato que viene de componente contenido:", this.pruebaNumber)
    
  //   if(this.pruebaNumber==2){
  //     this.PruebaDiv = true;
  //   }
  // }

  
}




