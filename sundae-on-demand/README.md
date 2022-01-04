### Install dependencies

npm install

### Run the app

npm start

### About Unit tests - React Testing Library & Jest

- Test interactivity using fireEvent

- jest dom assertions:

  - toBeEnabled()
  - toBeDisabled()
  - toBeChecked()
  - toHaveClass()

- getByRole option { name: }

- Jest describe to group tests

- Unit testing functions

## SummaryForm Review

- (review) testing flow where checkbox controls whether button is disabled

- mouseover for terms and conditions

  - userEvent.hover and userEvent.unhover methods
  - queryByText and expect().not.toBeInTheDocument() for element starting out not on page
  - async waitForElementToBeRemoved for element that was there and then disappeared

- test not wrapped in act(...) warning
  - Determine how component is getting updated async and account for in tests

## Review of "scoops" Testing

- Mock Service Worker mimics responses from server

  - Create handler
  - Create server
  - Update setupTests to listen for requests

- getAllByRole

  - search for more than one match to role

- await findAllByRole
  - for asynchronous DOM update of elements

## Review of Alert Testing

- Override Mock Service Worker response for individual tests

- Misleading Unable to find role="alert" error

- Isolate file by typing p in jest watch mode

- Isolates test within file eith test.only or test.skip

- waitFor for tests where await findBy\* isn't enough

## Review of Scoop Subtotal with context

- getByText to find total

  - exact option set to false

- number inputs

  - await and findBy (coming from server async)
  - spinbutton role
  - userEvent.clear to clear existing text
  - userEvent.type to enter number

- wrapper option to render to apply context provider

- Redefine Texting Librabry render to access universally

## Learned troubleshooting techniques

    - screen.debug()
    - reading test error output carefully
    - probable causes for common errors
    - use known working code as a refernce

## Passing Placeholder function as prop

- jest.fn()

## Standard Questions to ask while writing the test cases

    - What to render?
    	- what's the smallest component that encompasses tests?
    - Do we need to pass any props?
    - Do we need to wrap in, say, OrderDetailsProvider
    	- Does the provider get used? Is it already wrapped within the component?
    - Where should the tests go?
    	- which file? New file needed?
    - What to test?
    	- What's the behaviour that needs testing?
    - How to test?
    	- what queries and events?
    - Do we need to await?
    	- is there anything async going on?
