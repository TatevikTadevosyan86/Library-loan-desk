export class LoanRepository {
  constructor() {
    this.loansByBookId = new Map();
  } 
  save(loan) {
    this.loansByBookId.set(loan.bookId, loan);
    
  }
  findByBookId(bookId) {
    return this.loansByBookId.get(bookId);
  }
}