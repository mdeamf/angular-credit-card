import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

/** Routes - Home module routes. */
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { animation: 'HomePage' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
