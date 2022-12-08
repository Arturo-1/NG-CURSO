import { Component, OnInit,Output, EventEmitter,ChangeDetectorRef} from '@angular/core';
import { FormGroup, FormControl, FormBuilder,  Validators, MinLengthValidator } from '@angular/forms';
import { NgxToastService } from 'ngx-toast-notifier';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  
  //  = new FormControl(Validators.required, Validators.minLength(8));

  // LoginForm = new FormGroup({
  //   firstUser: this.fistUserControl,
  //   firstPassword: this.fistPasswordControl
  // })

  datoValidate:number = 0;
  @Output() valorEnviado = new EventEmitter();
  public error:string ='';

  datoUser =[
    {
      id: 1,
      user: "admin",
      password: "art12345"
    }
  ]
 
  constructor(
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private ngxToastService: NgxToastService
     
  ) 
  {
    this.LoginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
    });
  }
  
  ngOnInit(): void {
    this.error = 'error';
    // this.LoginForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  validateForm(){
    if(this.LoginForm.controls.user.value == "" ){
      this.ngxToastService.onWarning('Usuario no valido','Intente nuevamente')
      return
    }
    if(this.LoginForm.controls.password.value == ""){
      this.ngxToastService.onWarning('Contraseña incorrecta','Intente Nuemvamente')
      return
    }
    if (this.LoginForm.controls.user.value != this.datoUser[0].user || this.LoginForm.controls.password.value != this.datoUser[0].password){
      this.ngxToastService.onDanger('Los datos ingresados no son correctos','Favor de intentar nuevamente')
      // alert("intente de nuevo");
      return
    }
    this.datoValidate = 1;
    this.valorEnviado.emit(this.datoValidate);
    this.ngxToastService.onSuccess('Bienvenido!!!' ,'Comencemos')
    
  }

}
