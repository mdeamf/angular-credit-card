import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { CardDetailFunctionComponent } from './components/card-detail-function/card-detail-function.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardFinalNumbersPipe } from './pipes/card-final-numbers.pipe';
import { CardNumbersPipe } from './pipes/card-numbers.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    NavBarComponent,
    CardCarouselComponent,
    CardComponent,
    CardDetailComponent,
    CardNumbersPipe,
    CardFinalNumbersPipe,
    CardDetailFunctionComponent,
  ],
  imports: [
    /* Angular Modules */
    CommonModule,
    HomeRoutingModule,

    /* PrimeNG Modules */
    CardModule,
    ButtonModule,
    CarouselModule,
    RippleModule,
  ],
})
export class HomeModule {}
