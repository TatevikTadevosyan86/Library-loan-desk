import { createInterface } from 'node:readline';
import { LoanRepository } from './loan-repository.js';
import { LoanFactory } from './loan-factory.js';
import { CheckoutService } from './checkout-service.js';
import { ReturnService } from './return-service.js';
import { LibraryConsole } from './library-console.js';
import { MILLISECONDS_PER_DAY } from './time.js';

const clock = {
  today() {
    return Math.floor(Date.now() / MILLISECONDS_PER_DAY);
  },
};

const repository = new LoanRepository();
const factory = new LoanFactory(clock);
const checkoutService = new CheckoutService(repository, factory);
const returnService = new ReturnService(repository, clock);
const libraryConsole = new LibraryConsole(checkoutService, returnService, console.log);

const terminal = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  'To borrow a book, type: borrow B41\n' +
  'To return it, type: return B41\n' +
  'Replace B41 with the book ID you want.\n' +
  'To close the program, type: exit'
);

terminal.on('line', (command) => {
  if (command === 'exit') {
    terminal.close();
    return;
  }

  libraryConsole.runCommand(command);
});