# Library Loan Desk

A JavaScript console app for borrowing and returning library books, built for the A1.a2 test-driven development assignment.

## Run the app

Use Node.js 24. The project has no external packages to install. From the repository root, run:

```bash
node src/main.js
```

Type one command per line:

```text
borrow B42
return B42
exit
```

Borrowing creates a loan due seven days later and displays the due date. Returning removes the active loan and displays the late fee. The fee is one unit per overdue day and zero for an on-time or early return. The app stores active loans in memory for the current session.

## Run the tests

```bash
node --test
```

The tests use Node's built-in test runner and strict assertions. They use stub clocks and repositories to supply fixed answers, and mock functions to verify what the services save, remove, and display.

## Coverage

```bash
node --test --experimental-test-coverage
```

The latest run passed all 20 tests and reported 100% line, branch, and function coverage for the eight source files it measured. The terminal entry point, `src/main.js`, is exercised separately by running the app.

## Project structure

| Component | Role |
| --- | --- |
| `LoanFactory` | Uses a clock to create a loan with a checkout day and due day. |
| `CheckoutService` | Checks for an existing loan and saves a new one when the book is available. |
| `ReturnService` | Removes an active loan and creates a return receipt with the late fee. |
| `LoanRepository` | Stores and retrieves active loans by book ID. |
| `LibraryConsole` | Sends commands to the checkout and return services and prints their results. |

## TDD workflow

Run `git log --oneline` to see the checkpoints. The first **RED** commit (`6996d61`) tests that a loan is due seven days after checkout. The **GREEN** commit (`90d4dd4`) implements the calculation, and the **REFACTOR** commit (`46cff59`) names the seven-day loan period. Save coverage output in a separate **COVERAGE** commit.
