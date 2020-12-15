import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { fadeInAnimation } from './../../../assets/shared/animations';
import { Cards, CardsOptions } from './../../../assets/shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', '../home.css'],
  animations: [fadeInAnimation],
})
export class HomePageComponent implements OnInit {
  /** Array of cards. */
  cards: Cards[];
  /** Current selected card's index. */
  cardIndex: number = 0;
  /** Array of options to show below the selected card. */
  cardOptions: CardsOptions[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.cards = [
      {
        id: 1,
        number: '1234000000005011',
        embossedName: 'Joao Silva Ribeiro',
        validThru: '07/27',
        securityCode: '123',
        brand: 'master',
        isCreditActive: true,
        isDebitActive: true,
        isBlocked: false,
        isAdditional: false,
      },
      {
        id: 2,
        number: '1234000000005030',
        embossedName: 'Carla Silva Ribeiro',
        validThru: '10/26',
        securityCode: '456',
        brand: 'master',
        isCreditActive: true,
        isDebitActive: true,
        isBlocked: false,
        isAdditional: true,
      },
      {
        id: 3,
        number: '9999123400000020',
        embossedName: 'Juliana Santos',
        validThru: '10/20',
        securityCode: '789',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: false,
        isAdditional: false,
      },
      {
        id: 4,
        number: '9999123400000045',
        embossedName: 'Murilo Santos',
        validThru: '10/20',
        securityCode: '012',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: false,
        isAdditional: true,
      },
      {
        id: 5,
        number: '9999123400000064',
        embossedName: 'Murilo Santos Junior',
        validThru: '10/20',
        securityCode: '345',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: false,
        isAdditional: true,
      },
      {
        id: 6,
        number: '5678000012341008',
        embossedName: 'Joao Silva Ribeiro',
        validThru: '10/20',
        securityCode: '678',
        brand: 'benefits',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: false,
        isAdditional: false,
      },
      {
        id: 7,
        number: '5678000012341020',
        embossedName: 'Joao Silva Ribeiro',
        validThru: '10/20',
        securityCode: '901',
        brand: 'benefits',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
        isAdditional: true,
      },
    ];

    this.cardOptions = [
      { name: 'serviços', icon: 'pi-credit-card' },
      { name: 'faturas', icon: 'pi-file' },
      { name: 'bloquear', icon: 'pi-lock' },
      { name: 'ajuda', icon: 'pi-question-circle' }
    ];
  }

  /** Change the selected index of the cards array. */
  selectCard(index: any): void {
    this.cardIndex = index.index;
  }

  /** Get the options list by evaluating the current selected cards's credit status. */
  getCardOptions(): CardsOptions[] {
    // Cloning the object.
    let finalOptions: CardsOptions[] = [ ...this.cardOptions ];

    // If the credit isn't active, hide the bill option.
    if (!this.cards[this.cardIndex].isCreditActive) {
      finalOptions.splice(1, 1);
    }

    return finalOptions;
  }
}
