// import { DataSource } from '@angular/cdk/collections';
// import { alumno } from 'src/app/models/alumno.models';

import { Component, OnInit } from '@angular/core';
import { CursosModalComponent } from '../modals/cursos-modal/cursos-modal.component';
import { MatDialog  } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  // cursos:any
  

  public dataSource:any = [];
  opcionSeleccionado:number = 0;
  filtroBusqueda:boolean = false;
  valorFIltro:string = '';
  textoDeInput = new FormControl('');
  valorInput: any;
  dataArreglo:any = []
  pruebaNumber:any = []
  val:any;
  dataCursos:any
  
 
  constructor(
    private readonly dialog: MatDialog,
    private serviceCurso: CursosService,
    private routerAct:ActivatedRoute,
    private router:Router

  ) { 


  }

  ngOnInit(): void {
    // this.dataSource = this.cursos
    // console.log("data source:", this.dataSource)
    this.serviceCurso.getCursos().subscribe(data =>{
      let cursos:Curso[] = data
      this.dataSource = cursos
      console.log("DATA CURSOS:",this.dataSource)
    })
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

  updateCurso(element:any){
    let datainfo= element
    console.log("fffff",datainfo)
    this.serviceCurso.CursoObservableData = element;
 
  }

  deleteCurso(id:number){
    let cursoId = id
    this.serviceCurso.deleteCurso(cursoId).subscribe()
  }
  
}
