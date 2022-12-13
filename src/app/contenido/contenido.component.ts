
import { Component, OnInit,Input, Output,EventEmitter, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('fCLick') fCLick!: ElementRef<HTMLElement>;

  formularioPrincipal:any
  textoDeInput = new FormControl('');
  
 
  public colorFiltro:string ='';
  
  
  secContent:boolean = false;
  
  alumnos = [
    {
        id: 1,
        nombre: "Arturo Hernandez Reyes",
        edad: 30,
        carrera: "Ingenieria en sistemas",
        institucion: "universidad mexicana de especialidades"
    },
    {
      id: 2,
      nombre: "carlos adrian Rodriguez Quezada",
      edad: 25,
      carrera: "Ingenieria en mecatronica",
      institucion: "UANL"
    },
    {
      id: 3,
      nombre: "Agustin Espinoza Vazquez",
      edad: 24,
      carrera: "Ingenieria en mecatronica",
      institucion: "UANL"
    },
    {
      id: 4,
      nombre: "itzel Perez Garcia",
      edad: 25,
      carrera: "Ingenieria Industrial",
      institucion: "tecnologico de monterrey"
    },
    {
      id: 5,
      nombre: "Luis Morales mendez",
      edad: 23,
      carrera: "Ingenieria en sistemas",
      institucion: "universidad mexicana de especialidades"
    },
    {
      id: 6,
      nombre: "Alejandro Lopez Moedano",
      edad: 26,
      carrera: "Ingenieria Industrial",
      institucion: "tecnologico de monterrey"
    },
    {
      id: 7,
      nombre: 'Karen',
      apellidos: 'Medina Vela',
      edad: 24,
      carrera: 'Licenciatura En derecho',
      institucion: "tecnologico de monterrey"
    },
    {
      id: 8,
      nombre: "Rigoberto Garcia Gomez",
      edad: 23,
      carrera: "Ingenieria en sistemas",
      institucion: "universidad mexicana de especialidades"
    },
    {
      id: 9,
      nombre: "Iker Miguel Arreola hernandez",
      edad: 22,
      carrera: "Licenciatura En derecho",
      institucion: "tecnologico de monterrey"
    },
    {
      id: 10,
      nombre: "Brenda Perez Garcia",
      edad: 31,
      carrera: "Ingenieria Industrial",
      institucion: "tecnologico de monterrey"
    },
];
dataArreglo:any = []
carreras = [
  {
      id: '1',
      carrera: 'Ingenieria en sistemas'  
  }
]

filtroBusqueda:boolean = false;
opcionSeleccionado:number = 0;
verSeleccion:number = 0;
valorFIltro:string = '';
val:any
valorInput: any;
// textoDeInput: string = '';
valorPrueba:boolean = false;

  constructor(
    private fb: FormBuilder,
    private MatButtonModule:MatButtonModule,
    private ref: ChangeDetectorRef,
    private el: ElementRef,
    
  ) {
    this.formularioPrincipal = FormGroup;
    
  }

  ngOnInit(): void {
    this.formularioPrincipal = this.fb.group
    this.dataArreglo = this.alumnos
    this.verSeleccion = 0;
    this.colorFiltro = 'color0';
  }

  triggerFalseClick() {
    let el: HTMLElement = this.fCLick.nativeElement;
    el.click();
  }

  capturar() {
    // this.valorEnviado.emit(this.datoPaso);
    console.log("entre")
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    if(this.verSeleccion != 0){
      this.filtroBusqueda = true;
    }
    if(this.verSeleccion == 1){
      this.valorFIltro = 'Carrera'
      
    }else if(this.verSeleccion == 2){
      this.valorFIltro = 'Institucion'
    }else{
      this.valorFIltro = 'Nombre'
    }
    console.log("valor de select:",this.verSeleccion);
    console.log("valor de Busqueda:",this.valorFIltro)
   
  }

  nuevaBusqueda(){
    this.ngOnInit();
    this.opcionSeleccionado = 0;
    this.valorInput = '';
    this.filtroBusqueda = false;
  }

  deletePaciente(){
    console.info("probando funcionalidad");
    // this.closeModal.nativeElement.click();
    // this.triggerFalseClick();
    // this.ref.detectChanges();
  }
  
  ValorBusqueda() {
    let sol = this.textoDeInput.value;
    console.log("data obtenida final:", sol);
    this.valorPrueba = true;
    if(this.verSeleccion == 3){
      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataArreglo=this.alumnos.filter(alumno => expresion.test(alumno.nombre));
      //this.dataArreglo=this.alumnos.filter(alumno => alumno.nombre === sol )
      this.colorFiltro = 'color1';
      console.log("data filtro like:", this.dataArreglo);
      
    }
    if(this.verSeleccion == 2){

      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataArreglo=this.alumnos.filter(alumno => expresion.test(alumno.institucion));
      // this.dataArreglo = this.alumnos.filter(alumno => alumno.institucion === sol.trim())
      this.colorFiltro = 'color2';
      console.log("data nueva institucion:",this.dataArreglo)
    }
    if(this.verSeleccion == 1){
      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataArreglo=this.alumnos.filter(alumno => expresion.test(alumno.carrera));
      // this.dataArreglo = this.alumnos.filter(alumno => alumno.carrera === sol.trim())
      this.colorFiltro = 'color3';
      console.log("data nueva institucion:",this.dataArreglo)
    }
    if(this.dataArreglo.length == 0){
      alert("Busqueda no encontrada, seleccione nuevamente");
      this.nuevaBusqueda();
    }
  }
}
