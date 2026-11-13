import {createLoan} from './loan.js';

export class LoanFactory {
  constructor(clock) {
    this.clock = clock;
  }
    create(bookId) {
      const checkoutDay = this.clock.today();
      return createLoan(bookId, checkoutDay);
      
    }
  
}