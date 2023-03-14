import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  constructor(private ele: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(this.ele.nativeElement, 'color', 'black');
  }
}