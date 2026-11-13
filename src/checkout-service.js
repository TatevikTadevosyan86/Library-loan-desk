

export class CheckoutService {
  constructor(repository, factory) {
    this.repository = repository;
    this.factory = factory;
  }

  checkout(bookId) {
    const existingLoan = this.repository.findByBookId(bookId);

    if (existingLoan) {
      return;
    }

    const loan = this.factory.create(bookId);
    this.repository.save(loan);
  }
}