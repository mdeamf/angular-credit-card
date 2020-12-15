export interface Cards {
  /** Unique id of the card. */
  id: number;

  /** Card number. Should have 16 characters. */
  number: string;

  /** Name to show on the card. */
  embossedName: string;

  /** Validation date, in the mm/YY format. */
  validThru: string;

  /** Three-digit numeric security code. */
  securityCode: string;

  /** The card's brand name. It can also be a benefits card. */
  brand: 'master' | 'visa' | 'benefits';

  /** Is the credit function active? */
  isCreditActive: boolean;

  /** Is the debit function active? */
  isDebitActive: boolean;

  /** Is the card blocked? */
  isBlocked: boolean;

  /** Is the card from an additional owner? */
  isAdditional: boolean;
}

export interface CardsOptions {
  /** Name of the option. */
  name: string;

  /** Icon that will be shown above the option. */
  icon: string;
}
