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
  /** Cards array. */
  @Input() cards: Cards[];
  /** Event to emit when selecting a new card. */
  @Output() onChangeCard: EventEmitter<any> = new EventEmitter();

  /** Responsive options to change the amount of card showing according to screen size. */
  responsiveOptions: any[];
  /** Index of the current selected card. */
  cardIndex: number = 0;
  /** Is a new card loading, after being selected? */
  cardLoading: boolean = false;
  /** Is the card hiding to the left? */
  cardNotShowingLeft: boolean = false;
  /** Is the card hiding to the right? */
  cardNotShowingRight: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Defining the responsive options for the carousel.
    this.responsiveOptions = [
      // Below 768px, show 5 cards
      {
        breakpoint: '768px',
        numVisible: 5,
        numScroll: 1,
      },
      // Below 560px, show 3 cards.
      {
        breakpoint: '560px',
        numVisible: 3,
        numScroll: 1,
      },
    ];
  }

  /**
   * Event emitted when the page (not selected card) is changed.
   * Which means it's called when the user interacts with the previous or next arrows of the carousel.
   * @param event Event object containing the page index.
   */
  changePage(event: { page: number }): void {
    // Creating an array of the cards sequence IDs that are being shown.
    // We can assume that the first card being shown is the current page number.
    let cardShowing: number[] = [event.page, event.page + 1, event.page + 2];

    // If the length is larger than 560px, there are 5 cards being shown.
    if (window.innerWidth > 560) {
      cardShowing.push(event.page + 3, event.page + 4);
    }

    // If the length is larger than 768px, there are 6 cards being shown.
    if (window.innerWidth > 768) {
      cardShowing.push(event.page + 5);
    }

    // Checking if the card is being shown.
    let isCardShowing = false;
    cardShowing.forEach((item: number) => {
      // If one of the IDs that are showing is equal to the cardIndex, it means the selected card is visible.
      if (item === this.cardIndex) {
        isCardShowing = true;
      }
    });

    if (!isCardShowing) {
      // If the card isn't being shown...
      if (this.cardIndex < event.page) {
        // If the current index is lower than the current page, it's hidden to the left.
        this.cardNotShowingLeft = true;
        this.cardNotShowingRight = false;
      } else {
        // Else, it's hidden to the right.
        this.cardNotShowingLeft = false;
        this.cardNotShowingRight = true;
      }
    } else {
      // Else, it's showing.
      this.cardNotShowingLeft = false;
      this.cardNotShowingRight = false;
    }
  }

  /**
   * Event emitted when the small card is selected.
   * @param event MouseEvent event emitted from the click.
   */
  selectCard(event: { path: any[] }) {
    // Clean the hidden indicators.
    this.cardNotShowingLeft = false;
    this.cardNotShowingRight = false;

    // Indicate the card is loading.
    this.cardLoading = true;

    // Finding the card array ID.
    let id: string = '';

    // The path property is an array with the tree of elements. Loop around every single element to find the "card-{{id}}" we created.
    event.path.forEach((item: any) => {
      // Since we created an ID on the template, we can recapture that.
      if (item.id && item.id.indexOf('card-') >= 0) {
        id = item.id.replace('card-', '');
      }
    });

    // Emit the event on the HomePage.
    this.onChangeCard.emit({ index: id });

    // Set the current card index.
    this.cardIndex = parseInt(id);

    // Block the interaction for 300ms, so the animation has time to conclude.
    setTimeout(() => {
      this.cardLoading = false;
    }, 300);
  }
}
