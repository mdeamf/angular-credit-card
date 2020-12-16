import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { SessionService } from './shared/services/session.service';

/** Routes - Main application routes. */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./intro/intro.module').then((mod) => mod.IntroModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'home',
    canActivate: [SessionService],
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
