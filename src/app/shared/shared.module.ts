import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from '../pages/slider/slider.component';
import { CakelistComponent } from '../pages/cakelist/cakelist.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SliderComponent,
    CakelistComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SliderComponent,
    CakelistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
