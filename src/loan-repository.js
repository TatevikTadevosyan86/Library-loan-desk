export class LoanRepository {
  #loansByBookId; 

  constructor() {
    this.#loansByBookId = new Map(); 
  }

  save(loan) {
    this.#loansByBookId.set(loan.bookId, loan);
  }
  remove(bookId) {
    this.#loansByBookId.delete(bookId);
  }
  findByBookId(bookId) {
    return this.#loansByBookId.get(bookId);
  }
}