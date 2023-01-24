import { Component, OnInit,Output, EventEmitter,ChangeDetectorRef, ElementRef} from '@angular/core';
import { FormGroup, FormControl, FormBuilder,  Validators, MinLengthValidator } from '@angular/forms';
import { NgxToastService } from 'ngx-toast-notifier';
import { Users } from '../../../models/users.module';
import { LoginI } from '../../../models/login.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  
  
  datoValidate:number = 0;
  @Output() valorEnviado = new EventEmitter();
  public error:string ='';

  // datoUser =[
  //   {
  //     id: 1,
  //     user: "admin",
  //     password: "art12345"
  //   }
  // ]
 
  constructor(
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private ngxToastService: NgxToastService,
    // private httpClient: HttpClient,
    private DataUsers: AuthService
  ) 
  {
    this.LoginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
    });
  }
  
  ngOnInit(): void {  
    this.DataUsers.getDataUsers();
    // console.log("info de data ????:", data)
    this.error = 'error';
    // this.LoginForm.valueChanges.subscribe((value) => {
    // });
  }

  ValidLogin(form:LoginI){
    this.DataUsers.ValidLogin(form).subscribe(data => {
      console.log("DATA PROVENIENTE DEL SERVICE:",data)
    })
    // if(this.LoginForm.controls.usuario.value == "" ){
    //   this.ngxToastService.onWarning('Usuario no valido','Intente nuevamente')
    //   return
    // }
    // if(this.LoginForm.controls.password.value == ""){
    //   this.ngxToastService.onWarning('Contraseña incorrecta','Intente Nuemvamente')
    //   return
    // }
    // if (this.LoginForm.controls.usuario.value != this.datoUser[0].user || this.LoginForm.controls.password.value != this.datoUser[0].password){
    //   this.ngxToastService.onDanger('Los datos ingresados no son correctos','Favor de intentar nuevamente')
    //   // alert("intente de nuevo");
    //   return
    // }


    // this.datoValidate = 1;
    // this.valorEnviado.emit(this.datoValidate);
    // this.ngxToastService.onSuccess('Bienvenido!!!' ,'Comencemos')
  }
}
