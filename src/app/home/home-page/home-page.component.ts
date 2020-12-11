import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './../../../assets/shared/animations';
import { Cards } from './../../../assets/shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [fadeInAnimation],
})
export class HomePageComponent implements OnInit {
  cards: Cards[];
  cardIndex: number = 0;
  responsiveOptions: any[];

  constructor() {}

  ngOnInit(): void {
    this.cards = [
      {
        id: 1,
        number: '5213 8924 2782 3317',
        embossedName: 'Joao Silva Ribeiro',
        validThru: '07/27',
        securityCode: '123',
        brand: 'master',
        isCreditActive: true,
        isDebitActive: true,
        isBlocked: false,
      },
      {
        id: 2,
        number: '4929 8778 9380 2661',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/26',
        securityCode: '456',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: false,
      },
      {
        id: 3,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'benefits',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 4,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 5,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 6,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 7,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 8,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 9,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 10,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 11,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 12,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
      {
        id: 13,
        number: '4539 7274 8988 5137',
        embossedName: 'Carla Cristina Santos AAAAA AAAAAA',
        validThru: '10/20',
        securityCode: '654',
        brand: 'visa',
        isCreditActive: false,
        isDebitActive: true,
        isBlocked: true,
      },
    ];
  }

  selectCard(index: any): void {
    this.cardIndex = index.index;
  }
}
