export interface Cards {
  /** Unique id of the card. */
  id: Number;

  /** Card number. Should have 16 characters. */
  number: String;

  /** Name to show on the card. */
  embossedName: String;

  /** Validation date, in the mm/YY format. */
  validThru: String;

  /** Three-digit numeric security code. */
  securityCode: String;

  /** The card's brand name. It can also be a benefits card. */
  brand: 'master' | 'visa' | 'benefits';

  /** Is the credit function active? */
  isCreditActive: Boolean;

  /** Is the debit function active? */
  isDebitActive: Boolean;

  /** Is the card blocked? */
  isBlocked: Boolean;
}
