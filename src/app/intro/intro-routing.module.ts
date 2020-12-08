import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent,
    data: { animation: 'IntroPage' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroRoutingModule {}
