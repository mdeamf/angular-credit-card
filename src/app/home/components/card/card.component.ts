import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Cards } from 'src/app/shared/interfaces';
import { fadeInAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../home.css'],
  animations: [fadeInAnimation],
})
export class CardComponent implements OnInit, OnChanges {
  /** Card object. */
  @Input() card: Cards;

  /** Should the card be shown? */
  showCard: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    // Hide the card and start the fade out animation.
    this.showCard = false;

    // Gradually start the fade in animation of the new card.
    setTimeout(() => {
      this.showCard = true;
    }, 100);
  }
}
