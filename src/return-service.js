import { calculateLateFee } from './return.js';

export class ReturnService {
  constructor(repository, clock) {
    this.repository = repository;
    this.clock = clock;
  }

  returnBook(bookId) {
    const existingLoan = this.repository.findByBookId(bookId);

    if (existingLoan) {
      const returnDay = this.clock.today();
      const lateFee = calculateLateFee(existingLoan.dueDay, returnDay);

      this.repository.remove(bookId);
      return lateFee;
    }
  }
}
export class ReturnReceipt {}