import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @HostListener('blur') onBlur() {
    this.elRef.nativeElement.value = this.elRef.nativeElement.value.toUpperCase();
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    console.log(this.elRef.nativeElement.value);
  }

}
