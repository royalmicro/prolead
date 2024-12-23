export class Price {
  private readonly value: number;
  private readonly currency: string;

  constructor(value: number, currency: string = 'USD') {
    if (value < 0) {
      throw new Error('Price value cannot be negative');
    }

    if (!currency || typeof currency !== 'string' || currency.length !== 3) {
      throw new Error('Invalid currency code');
    }

    this.value = value;
    this.currency = currency.toUpperCase();
  }

  getValue(): number {
    return this.value;
  }

  getCurrency(): string {
    return this.currency;
  }

  toString(): string {
    return `${this.currency} ${this.value.toFixed(2)}`;
  }

  toJSON(): object {
    return {
      value: this.value,
      currency: this.currency,
    };
  }

  static fromJSON(data: { value: number; currency: string }): Price {
    if (!data || typeof data.value !== 'number' || !data.currency) {
      throw new Error('Invalid JSON data for Price');
    }
    return new Price(data.value, data.currency);
  }
}
