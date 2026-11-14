

export function calculateLateFee(dueDay, returnDay) {
  const daysOverdue = returnDay - dueDay;
  const lateFee = Math.max(0, daysOverdue);
  return lateFee;
  }