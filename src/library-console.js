export class LibraryConsole {
  constructor(checkoutService, ) {
    this.checkoutService = checkoutService;
    
  }
    runCommand(command) {
    const commandParts = command.split(' ');
    const action = commandParts[0];
    const bookId = commandParts[1];

    if (action === 'borrow') {
      this.checkoutService.checkout(bookId);
    }
  }
}