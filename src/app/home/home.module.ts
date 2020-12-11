import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    NavBarComponent,
    CardCarouselComponent,
    CardComponent,
    CardDetailComponent,
  ],
  imports: [
    /* Angular Modules */
    CommonModule,
    HomeRoutingModule,

    /* PrimeNG Modules */
    CardModule,
    ButtonModule,
    CarouselModule,
  ],
})
export class HomeModule {}
