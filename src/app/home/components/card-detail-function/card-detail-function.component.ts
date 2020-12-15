import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail-function',
  templateUrl: './card-detail-function.component.html',
  styleUrls: ['./card-detail-function.component.css'],
})
export class CardDetailFunctionComponent implements OnInit {
  /** Text to show on the left. */
  @Input() title: string;
  /** Text to show on the right. */
  @Input() value: string;
  /** Icon to show near the value. */
  @Input() icon: string;
  /** Color of the value text and icon. */
  @Input() color: 'green' | 'red' | 'normal';

  constructor() {}

  ngOnInit(): void {
    if (!this.color) {
      this.color = 'normal';
    }
  }
}
