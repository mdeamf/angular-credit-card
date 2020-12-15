import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeStateTrigger } from 'src/app/shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeStateTrigger],
})
export class AppComponent {
  /** Preparing the route, so it properly animates. */
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
