import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

/** Simple fade in animation. */
export const fadeInAnimation = trigger('fadeInAnimation', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [style({ opacity: 0 }), animate(350)]),
  transition(':leave', animate(350, style({ opacity: 0 }))),
]);

/** Route animation */
export const routeStateTrigger = trigger('routeState', [
  transition('*<=>*', [
    style({ opacity: 0 }),
    animate('0.5s', style({ opacity: 1 })),
  ]),
]);
