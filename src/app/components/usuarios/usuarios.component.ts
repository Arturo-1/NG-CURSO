import { Component, OnInit } from '@angular/core';
import { UsuariosDataService } from '../../services/usuarios-data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private UsuariosDataService: UsuariosDataService) { }

  ngOnInit(): void {
  }
  

}
