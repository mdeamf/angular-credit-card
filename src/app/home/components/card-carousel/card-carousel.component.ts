import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cards } from 'src/assets/shared/interfaces';
import { fadeInAnimation } from './../../../../assets/shared/animations';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css', '../../home.css'],
  animations: [fadeInAnimation],
})
export class CardCarouselComponent implements OnInit {
  @Input() cards: Cards[];
  @Output() onChangeCard: EventEmitter<any> = new EventEmitter();

  responsiveOptions: any[];
  cardIndex: number = 0;
  cardLoading: boolean = false;
  cardNotShowingLeft: boolean = false;
  cardNotShowingRight: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '768px',
        numVisible: 5,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 3,
        numScroll: 1,
      },
    ];
  }

  changePage(event: any): void {
    let cardShowing: number[] = [event.page, event.page + 1, event.page + 2];

    if (window.innerWidth > 560) {
      cardShowing.push(event.page + 3, event.page + 4);
    }

    if (window.innerWidth > 768) {
      cardShowing.push(event.page + 5);
    }

    let isCardShowing = false;
    cardShowing.forEach((item: number) => {
      if (item === this.cardIndex) {
        isCardShowing = true;
      }
    });

    if (!isCardShowing) {
      if (this.cardIndex < event.page) {
        this.cardNotShowingLeft = true;
        this.cardNotShowingRight = false;
      } else {
        this.cardNotShowingLeft = false;
        this.cardNotShowingRight = true;
      }
    } else {
      this.cardNotShowingLeft = false;
      this.cardNotShowingRight = false;
    }
  }

  selectCard(event: { path: any[] }) {
    this.cardNotShowingLeft = false;
    this.cardNotShowingRight = false;
    this.cardLoading = true;

    let id: string = '';
    event.path.forEach((item: any) => {
      if (item.id && item.id.indexOf('card-') >= 0) {
        id = item.id.replace('card-', '');
      }
    });
    this.onChangeCard.emit({ index: id });
    this.cardIndex = parseInt(id);

    setTimeout(() => {
      this.cardLoading = false;
    }, 300);
  }
}
