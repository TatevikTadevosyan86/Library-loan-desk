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
      this.checkoutService.checkout(bookId);
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