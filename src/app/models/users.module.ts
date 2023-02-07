
export class User{
  constructor(
    public id: string,
    public nombre:string, 
    public apellidos:string,
    public usuario: string,
    public password: string,
    public correo: string,
    public tipo_user: String,
  ){}

  get fullName(){
    return this.nombre+' '+ this.apellidos
  }
}