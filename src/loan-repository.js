export class LoanRepository {
  constructor() {
    this.loans = new Map();
  } 
  save(loan) {
    this.loans.set(loan.bookId, loan);
    
  }
  findByBookId(bookId) {
    return this.loans.get(bookId);
  }
}