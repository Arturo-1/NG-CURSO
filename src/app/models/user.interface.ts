export interface UsersI {
    id: string,
    nombre:string, 
    apellidos:string,
    correo: string,
    usuario: string,
    password: string,
    tipo_user: string

}

export interface LoginSuccessFul{
    token:string;
}
export interface SingleUserResponse{
    data: UsersI;
    support:{
        url:string;
        text: string;
    }
}