## Test Driven Development

Testing Driven development is writing test before software code

- WatchMode
- test.only, describe.only (run only this test) or fit
- test.skip describe.skip(to not run the test) or xit
- test by filename p
- test by testname t
- describe() Group tests, it can also be nested

## Filename conventions

- .test.js or .test.tsx
- .spec.js or .spec.tsx
- .js or .tsx suffic in **tests** folders

## Code Coverage

This is a metric that can help you understand how much of your code is tested

- statement coverage: how many of the statements in the software code hs been executed
- branches coverage: how many of the branches of the control structures have been executed
- function coverage: how many of the functions defined have been called and finally

## What to Test?

- Test component renders
- Test component renders with this.this.props
- Test component renders in different states
- Test component reacts to events

## What not to Test

- Implementation details, test the result not the implementation of the code
- Third party code
- Code that is not important frpm a user point of view, e.g. A utility function to display the date in a nice way.

## React Testing Queries

Queries are the methods that Testing Library provides to find elements on the page
To find a single element on the page, we have

- getBy
- queryBy
- findBy

To finde mulitple elements on the page, we have

- getAllBy
- queryAllBy
- findAllBy

the suffix can be one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and finally TestId

- getByDisplay value returns the input, textarea or select element that has matching display value
- getByAltText retuns the element that has the given alt text, supports ``<img>, <input>, <area>`` or custom HTML elements
-getByTestId returns the element that has the matching data==testid attribute

## Priority Order for Queries
Your test should resemble how users interact with your code (component, page, etc) as much as possible.
- getByRole
- getByLabelText
- getByPlaceholderText
- getByText
- getByDisplayValue
- getByAltText
- getByTestId
