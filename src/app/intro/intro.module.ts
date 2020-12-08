import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { IntroRoutingModule } from './intro-routing.module';

@NgModule({
  declarations: [IntroPageComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    IntroRoutingModule,

    /* PrimeNG Modules */
    ButtonModule,
  ],
})
export class IntroModule {}
