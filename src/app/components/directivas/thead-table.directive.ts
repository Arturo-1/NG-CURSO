import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTheadTable]'
})
export class TheadTableDirective implements OnInit {

  constructor(private elemento: ElementRef, private renderer:Renderer2) {
    elemento.nativeElement.style.fontsize = '20px';
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement,'font-size','20px')
  }

}
