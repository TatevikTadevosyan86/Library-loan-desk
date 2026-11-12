import { createLoan } from './loan.js';

export class CheckoutService {
  constructor(repository) {
    this.repository = repository;
  }

  checkout(bookId, checkoutDay) {
    const existingLoan = this.repository.findByBookId(bookId);

    if (existingLoan) {
      return;
    }
    
    const loan = createLoan(bookId, checkoutDay);
  this.repository.save(loan);
  }
}