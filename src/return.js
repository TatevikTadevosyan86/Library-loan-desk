

export function calculateLateFee(dueDay, returnDay) {
   const daysOverdue = returnDay - dueDay;
    return Math.max(0, daysOverdue);
  }