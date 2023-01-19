// import { DataSource } from '@angular/cdk/collections';
// import { alumno } from 'src/app/models/alumno.models';

import { Component, OnInit } from '@angular/core';
import { CursosModalComponent } from '../modals/cursos-modal/cursos-modal.component';
import { MatDialog  } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import { Curso } from 'src/app/models/curso';

// import { Curso } from '../../models/curso/curso.module';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  displayedColumns = [
    'id',
    'nombre',
    'codigo',
    'tutor',
    'area',
    'fecha Inicial',
    'precio',
    'acciones'
  ];

  public cursos:Curso[]=[
    { 
      id: 1,
      nombre: "Desarrollo Angular",
      area: "Programacion y desarrollo",
      descripcion: "Angular es el framework de desarrollo en JavaScript creado y soportado por Google. Descubre cómo escuchar y responder a eventos generados por el usuario. ",
      codigo: 243267,
      tutor: "Javier Molina",
      fecha_Inicial: "05-02-2023",
      img: "../assets/img/cursos/angular-14.jpg",
      precio: 2500
    }, 
    { 
      id: 2,
      nombre: "Cibersiguridad",
      area: "Seguridad Informatica",
      descripcion: "Comprender la importancia de los riesgos y amenazas informáticas en la actualidad, identificar las principales vulnerabilidades en las redes y los sistemas informáticos",
      codigo: 246987,
      tutor: "Carlos Aceves",
      fecha_Inicial: "08-02-2023",
      img: "../assets/img/cursos/cyber-security-article.jpg",
      precio: 1900
    }, 
    { 
      id: 3,
      nombre: "Programacion PLC",
      area: "Ingenieria Industrial",
      descripcion: " En este curso de PLC aprenderás cómo automatizar un proceso industrial mediante la programación de un PLC de la marca Delta. ",
      codigo: 145824,
      tutor: "Jonathan Velazquez",
      fecha_Inicial: "31-01-2023",
      img: "../assets/img/cursos/plc.jpg",
      precio: 2800
    }, 
    { 
      id: 4,
      nombre: "Robotica y Mecatronica",
      area: "Ingenieria Mecatronica",
      descripcion: "Este curso está diseñado para que cualquier estudiante con conocimientos básicos de electrónica pueda iniciarse en la programación de sistemas embebidos usando Arduino. ",
      codigo: 267845,
      tutor: "Maria Acevedo",
      fecha_Inicial: "01-02-2023",
      img: "../assets/img/cursos/robotica.jpg",
      precio: 5200
    }, 
    { 
      id: 5,
      nombre: "Derecho Pericial",
      area: "Derecho",
      descripcion: "En este curso aprenderás derecho de propiedad, a partir de mecanismos jurídicos, para identificar los factores que influyen en la adquisición de una propiedad y cómo se debe realizar el debido proceso.",
      codigo: 145824,
      tutor: "Alejandra Martinez",
      fecha_Inicial: "12-02-2023",
      img: "../assets/img/cursos/derecho.jpg",
      precio: 2450
    }, 
  ]

  public dataSource:any = [];
  opcionSeleccionado:number = 0;
  filtroBusqueda:boolean = false;
  valorFIltro:string = '';
  textoDeInput = new FormControl('');
  valorInput: any;
  dataArreglo:any = []
  pruebaNumber:any = []
  val:any;

  constructor(
    private readonly dialog: MatDialog,
  ) { 
    
  }

  ngOnInit(): void {
    this.dataSource = this.cursos
    console.log("data source:", this.dataSource)
  }

  addCurso(){
    const dialogData = this.dialog.open(CursosModalComponent);
    
    dialogData.afterClosed().subscribe((value) => {
      if(value){
        // const IdFin = this.dataSource[this.dataSource.length -1]?.id;
        // this.dataSource.push(IdFin + 1, value.nombre, value.edad, value.carrera, value.institucion)
        // this.dataSource = [...this.dataSource, new alumno(IdFin + 1, value.nombre, value.apellidos,value.edad, value.carrera, value.institucion)]
      }
      
    })
  }

  deleteCurso(cursos:Curso){
    this.dataSource = this.dataSource.filter((dataSource:any) => dataSource.id !== cursos.id);
  }
  
}
