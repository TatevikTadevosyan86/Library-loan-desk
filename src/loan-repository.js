export class LoanRepository {
  constructor() {
    this.loansByBookId = new Map();
  } 
  save(loan) {
    this.loansByBookId.set(loan.bookId, loan);
    
  }
    remove(bookId) {
  }
  findByBookId(bookId) {
    return this.loansByBookId.get(bookId);
  }
}