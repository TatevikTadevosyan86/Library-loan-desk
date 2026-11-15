export class ReturnService {
  constructor(repository) {
    this.repository = repository;
  }

  returnBook(bookId) {
     const loan = this.repository.findByBookId(bookId);

  if (loan) {
    this.repository.remove(bookId);
  }
}
}