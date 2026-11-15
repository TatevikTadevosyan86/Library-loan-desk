export class ReturnService {
  constructor(repository) {
    this.repository = repository;
  }

  returnBook(bookId) {
     const existingLoan = this.repository.findByBookId(bookId);

  if (existingLoan) {
    this.repository.remove(bookId);
  }
}
}