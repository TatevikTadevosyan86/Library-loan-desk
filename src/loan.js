export class Loan {
  constructor(bookId, checkoutDay, dueDay) {
    this.bookId = bookId;
    this.checkoutDay = checkoutDay;
    this.dueDay = dueDay;
  }
}
const LOAN_PERIOD_DAYS = 7;
export function calculateDueDay(checkoutDay) {
  return checkoutDay + LOAN_PERIOD_DAYS;
}

export function createLoan(bookId, checkoutDay) {
  const dueDay = calculateDueDay(checkoutDay);
  return new Loan(bookId, checkoutDay, dueDay);
  
}