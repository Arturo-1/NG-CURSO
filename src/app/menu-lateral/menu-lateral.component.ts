import { Component, OnInit } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "app-menu-lateral",
  templateUrl: "./menu-lateral.component.html",
  styleUrls: ["./menu-lateral.component.css"]
})
export class MenuLateralComponent implements OnInit {

  constructor(private MatButtonModule:MatButtonModule,) { }

  ngOnInit(): void {
  }

}
