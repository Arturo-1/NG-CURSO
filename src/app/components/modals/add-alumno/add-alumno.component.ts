import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from  '@angular/material/dialog' ;


@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  nombreControl = new FormControl('');
  edadControl = new FormControl('');
  carreraControl = new FormControl('');
  institucionControl = new FormControl('');

  studentForm = new FormGroup({
    nombre: this.nombreControl,
    edad: this.nombreControl,
    carrera: this.nombreControl,
    institucion: this.nombreControl,
  })

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  addConfirm(){
    console.log()
  }



  // close(){
  // this.dialog.close();
  // }


}
