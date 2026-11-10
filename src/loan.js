
const LOAN_PERIOD_DAYS = 7;
export function calculateDueDay(checkoutDay) {
  return checkoutDay + LOAN_PERIOD_DAYS;
}

export function createLoan(bookId, checkoutDay) {
  const dueDay = calculateDueDay(checkoutDay);
  return { bookId, checkoutDay, dueDay };
  
}