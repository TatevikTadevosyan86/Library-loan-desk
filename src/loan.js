export function calculateDueDay(checkoutDay) {
  return checkoutDay + 7;
}

export function createLoan(bookId, checkoutDay) {
  const dueDay = calculateDueDay(checkoutDay);
  return { bookId, checkoutDay, dueDay };
  
}