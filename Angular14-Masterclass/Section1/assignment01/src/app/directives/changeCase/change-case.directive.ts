import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @Input('appChangeCase') case!: string;

  @HostListener('blur') onBlur() {
    let changedValue: string =  this.case === 'upper' ? this.elRef.nativeElement.value.toUpperCase()
                                                      : this.elRef.nativeElement.value.toLowerCase();
    
    //this.elRef.nativeElement.value = this.elRef.nativeElement.value.toUpperCase();
    this.renderer.setProperty(this.elRef.nativeElement, 'value', changedValue)
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.elRef.nativeElement.value);
  }

}
