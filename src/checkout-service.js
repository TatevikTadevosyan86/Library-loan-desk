import { createLoan } from './loan.js';

export class CheckoutService {
  constructor(repository) {
    this.repository = repository;
  }

  checkout(bookId, checkoutDay) {
    const loan = createLoan(bookId, checkoutDay);
  this.repository.save(loan);
  }
}