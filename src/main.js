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

console.log('Enter borrow B42, return B42, or exit.');

terminal.on('line', (command) => {
  if (command === 'exit') {
    terminal.close();
    return;
  }

  libraryConsole.runCommand(command);
});