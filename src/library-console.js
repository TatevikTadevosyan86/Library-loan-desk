export class LibraryConsole {
  constructor(checkoutService,  returnService)  {
    this.checkoutService = checkoutService;
    this.returnService = returnService;
  }
    runCommand(command) {
    const commandParts = command.split(' ');
    const action = commandParts[0];
    const bookId = commandParts[1];

    if (action === 'borrow') {
      this.checkoutService.checkout(bookId);
    }
    else if (action === 'return') {
      this.returnService.returnBook(bookId);
    } 
  }
}