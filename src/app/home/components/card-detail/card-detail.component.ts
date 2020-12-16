import { Component, Input, OnInit } from '@angular/core';
import { Cards } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css', '../../home.css'],
})
export class CardDetailComponent implements OnInit {
  /** Selected card. */
  @Input() card: Cards;

  constructor() {}

  ngOnInit(): void {}

  /** Get the text of the card's owner, according to the proper field. */
  getCardOwner(): string {
    return this.card.isAdditional ? 'adicional' : 'titular';
  }

  /** Get the card title to show below the card owner's text, indicating if it's credit, debit or benefits. */
  getCardTitle(): string {
    if (this.card.isCreditActive) {
      if (this.card.isDebitActive) {
        return 'cartão de crédito e débito';
      } else {
        return 'cartão de crédito';
      }
    } else {
      if (this.card.brand === 'benefits') {
        return 'cartão de benefícios';
      } else {
        return 'cartão de débito';
      }
    }
  }
}
