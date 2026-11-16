export class LibraryConsole {
  constructor(checkoutService,  returnService, print  )  {
    this.checkoutService = checkoutService;
    this.returnService = returnService;
    this.print = print;
  }
  runCommand(command) {
    const commandParts = command.split(' ');
    const action = commandParts[0];
    const bookId = commandParts[1];

    if (action === 'borrow') {
      const loan = this.checkoutService.checkout(bookId);
      if (loan) {
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const dueDate = new Date(loan.dueDay * millisecondsPerDay);
        const formattedDueDate = dueDate.toISOString().slice(0, 10);
        const message = `Book ${loan.bookId} borrowed. Due on ${formattedDueDate}.`;
       this.print(message);
      }
    }
    else if (action === 'return') {
      const receipt = this.returnService.returnBook(bookId);
     

      if (receipt) {
        const message = `Book ${receipt.bookId} returned. Late fee: ${receipt.lateFee}.`;
        this.print(message);
      }
    } 
  }
}