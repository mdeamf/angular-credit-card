import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Cards } from 'src/assets/shared/interfaces';
import { fadeInAnimation } from './../../../../assets/shared/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../home.css'],
  animations: [fadeInAnimation],
})
export class CardComponent implements OnInit, OnChanges/* , AfterViewInit */ {
  @Input() card: Cards;
  showCard: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.showCard = false;

    setTimeout(() => {
      this.showCard = true;
    }, 100);
  }

  /* ngAfterViewInit(): void {
    this.showCard = true;
    this.showLoading = false;
  } */
}
