import { calculateLateFee } from './return.js';

export class ReturnService {
  constructor(repository, clock) {
    this.repository = repository;
    this.clock = clock;
  }

  returnBook(bookId) {
    const existingLoan = this.repository.findByBookId(bookId);

    if (!existingLoan) {
    return;
    }
    const returnDay = this.clock.today();
    const lateFee = calculateLateFee(existingLoan.dueDay, returnDay);

    this.repository.remove(bookId);
    return new ReturnReceipt(bookId, lateFee);
    
  }
}
export class ReturnReceipt {
  constructor(bookId, lateFee) {
    this.bookId = bookId;
    this.lateFee = lateFee;
  }
}