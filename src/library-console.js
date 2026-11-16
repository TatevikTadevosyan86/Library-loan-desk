export class LibraryConsole {
  constructor(checkoutService, ) {
    this.checkoutService = checkoutService;
    
  }
    runCommand(command) {
    const words = command.split(' ');
    const action = words[0];
    const bookId = words[1];

    if (action === 'borrow') {
      this.checkoutService.checkout(bookId);
    }
  }
}