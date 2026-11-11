# Library Loan Desk

A small JavaScript project. The goal is a console app for borrowing and returning library books.

## What works so far

- A loan is due seven days after checkout. For example, a book borrowed on day 10 is due on day 17.
- A loan record contains the book ID, checkout day, and due day.
- The checkout service creates a loan and asks its repository to save it. A unit test uses a mock repository to verify that the service calls `save` exactly once.

The console interface, a repository that stores loans, and the return flow are planned. The checkout service currently receives its repository through its constructor.

## Run the tests

The commands below were verified with Node.js 24. The project uses Node's built-in test runner and has no external packages to install.

```bash
node --test
```

To see line, branch, and function coverage for the code exercised by the tests, run:

```bash
node --test --experimental-test-coverage
```


## TDD workflow

The Git history shows the development steps. A **RED** commit introduces a test for behavior that is missing. A **GREEN** commit adds the code needed to pass the test. A **REFACTOR** commit improves the code while keeping the tests green.

Run `git log --oneline` to see the checkpoints.

## Next steps

- Introduce a loan factory that creates a `Loan`. Inject a clock so tests can use a fixed day.
- Give the checkout service the loan factory and repository so tests can control each dependency.
- Add a return service that calculates any late fee and creates a `ReturnReceipt`.
- Add a console interface for checkout and return commands, then save the coverage report in a separate `COVERAGE` commit.
