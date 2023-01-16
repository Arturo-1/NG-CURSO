import { Component, OnInit,Input, Output,EventEmitter, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
// import { ModalsComponent } from '../components/modals/modals.component';
// import { AddAlumnoComponent } from '../components/modals/add-alumno/add-alumno.component';
import { MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { alumno } from 'src/app/models/alumno.models';
import { MatSelectModule } from '@angular/material/select';
import { AddAlumnoComponent } from '../modals/add-alumno/add-alumno.component';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  

  displayedColumns = [
    'id',
    'nombre',
    'edad',
    'carrera',
    'institucion',
    'star',
  ];
  

  // displayedColumns: string[] = ['id', 'nombre', 'edad', 'carrera', 'institucion'];
  // dataSource = alumnos;
  
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('fCLick') fCLick!: ElementRef<HTMLElement>;
  
  formularioPrincipal:any
  textoDeInput = new FormControl('');
  public colorFiltro:string ='';
  secContent:boolean = false;
dataArreglo:any = []
alumnos: alumno[]=[
  { 
    id: 1,
    nombre: "Arturo",
    apellidos: "Hernandez Reyes",
    edad: 30, 
    carrera: "Ingenieria en sistemas", 
    institucion: "universidad mexicana de especialidades"
  },
  {
    id: 2,
    nombre: "carlos adrian ",
    apellidos: "Rodriguez Quezada",
    edad: 25,
    carrera: "Ingenieria en mecatronica",
    institucion: "UANL"
  },
  {
    id: 3,
    nombre: "Agustin ",
    apellidos: "Espinoza Vazquez",
    edad: 24,
    carrera: "Ingenieria en mecatronica",
    institucion: "UANL"
  },
  {
    id: 4,
    nombre: "itzel",
    apellidos: "Perez Garcia",
    edad: 25,
    carrera: "Ingenieria Industrial",
    institucion: "tecnologico de monterrey"
  },
  {
    id: 5,
    nombre: "Luis",
    apellidos: "Morales mendez",
    edad: 23,
    carrera: "Ingenieria en sistemas",
    institucion: "universidad mexicana de especialidades"
  },
  {
    id: 6,
    nombre: "Alejandro",
    apellidos: "Lopez Moedano",
    edad: 26,
    carrera: "Ingenieria Industrial",
    institucion: "tecnologico de monterrey"
  },
  {
    id: 7,
    nombre: 'Karen',
    apellidos: "Medina Vela",
    edad: 24,
    carrera: 'Licenciatura En derecho',
    institucion: "tecnologico de monterrey"
  },
  {
    id: 8,
    nombre: "Rigoberto",
    apellidos: "Garcia Gomez",
    edad: 23,
    carrera: "Ingenieria en sistemas",
    institucion: "universidad mexicana de especialidades"
  },
  {
    id: 9,
    nombre: "Iker Miguel",
    apellidos: "Arreola hernandez",
    edad: 22,
    carrera: "Licenciatura En derecho",
    institucion: "tecnologico de monterrey"
  },
  {
    id: 10,
    nombre: "Brenda",
    apellidos: "Perez Garcia",
    edad: 31,
    carrera: "Ingenieria Industrial",
    institucion: "tecnologico de monterrey"
  },
];
carreras = [
  {
      id: '1',
      carrera: 'Ingenieria en sistemas'  
  }
]
datoValidate2:number = 0;
@Output() dataSource2 = new EventEmitter();
filtroBusqueda:boolean = false;
opcionSeleccionado:number = 0;
verSeleccion:number = 0;
valorFIltro:string = '';
valorInput: any;
valorPrueba:boolean = false;
  public dataSource:any = [];
  // public dataSource2:any = [];

  constructor(
    private fb: FormBuilder,
    private MatButtonModule:MatButtonModule,
    private ref: ChangeDetectorRef,
    private el: ElementRef,
    private readonly dialog: MatDialog,
    // private servicio: DataObservableService
    // private readonly dialogRef: MatDialog<AddAlumnoComponent>

  ) {
    this.formularioPrincipal = FormGroup;
  }

  ngOnInit(): void {
    // this.servicio.getAlumnos().subscribe(valores =>{
    //   console.log("data valores:", valores)
    // });

    // this.servicio.getFecha().subscribe(valor =>{
    //   console.log("valor emitido:", valor)
    // })

    this.formularioPrincipal = this.fb.group
    this.dataSource =this.alumnos
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
    console.log("arreglo inicial:", this.dataSource)
  }

  ValorBusqueda() {
  
    let sol = this.textoDeInput.value;
    console.log("data obtenida final:", sol);
    this.valorPrueba = true;
    console.log("arreglo inicial:", this.dataSource)

    if(this.verSeleccion == 3){
      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.nombre));
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.apellidos));
      // this.dataArreglo=this.alumnos.filter(alumno => alumno.nombre === sol )
      this.colorFiltro = 'color1';
      console.log("data filtro like:", this.dataSource);
      console.log("arreglo inicial:", this.dataSource)
    }
    if(this.verSeleccion == 2){

      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.institucion));
      // this.dataArreglo = this.alumnos.filter(alumno => alumno.institucion === sol.trim())
      this.colorFiltro = 'color2';
      console.log("data nueva institucion:",this.dataSource)
    }

    if(this.verSeleccion == 1){
      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.carrera));
      // this.dataArreglo = this.alumnos.filter(alumno => alumno.carrera === sol.trim())
      this.colorFiltro = 'color3';
      console.log("data nueva institucion:",this.dataSource)
    }

    if(this.dataSource.length == 0){
      alert("Busqueda no encontrada, seleccione nuevamente");
      this.nuevaBusqueda();
    }
    
  }

  addAlumno(){
    const dialogData = this.dialog.open(AddAlumnoComponent);
 
    dialogData.afterClosed().subscribe((value) => {
      if(value){
        const IdFin = this.dataSource[this.dataSource.length -1]?.id;
        // this.dataSource.push(IdFin + 1, value.nombre, value.edad, value.carrera, value.institucion)
        this.dataSource = [...this.dataSource, new alumno(IdFin + 1, value.nombre, value.apellidos,value.edad, value.carrera, value.institucion)]
      }
      
    })
  }  

  updateAlumno(alumno: alumno) {
    const dialog = this.dialog.open(AddAlumnoComponent, {
      data: alumno,
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.dataSource = this.dataSource.map((stu:any) => stu.id === alumno.id  ? { ...stu, ...data } : stu)
      }
    })
    
  }

  deleteAlumno(alumnos:alumno){
   this.dataSource = this.dataSource.filter((dataSource:any) => dataSource.id !== alumnos.id);
  }
 
  
}