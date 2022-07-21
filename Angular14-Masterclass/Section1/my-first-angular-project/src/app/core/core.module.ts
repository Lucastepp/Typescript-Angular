import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CoreModulePipe } from '../core-module.pipe';
import { CorePipePipe } from './core-pipe.pipe';
import { CoreDirectiveDirective } from './core-directive.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    CoreModulePipe,
    CorePipePipe,
    CoreDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
