import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from  '@angular/material/dialog' ;


@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  studentForm:FormGroup;
  // nombreControl = new FormControl('',[Validators.required]);
  // edadControl = new FormControl('',[Validators.required]);
  // carreraControl = new FormControl('',[Validators.required]);
  // institucionControl = new FormControl('',[Validators.required]);

  
  constructor(public dialog: MatDialog,  private fb: FormBuilder,) {

    this.studentForm = this.fb.group({
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      institucion:['', [Validators.required]],
    })
   }

  ngOnInit(): void {

  }
  addConfirm(){
    console.log("valores de formulario:", this.studentForm)
  }



  // close(){
  // this.dialog.close();
  // }


}
