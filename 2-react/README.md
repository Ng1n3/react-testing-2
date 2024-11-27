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
- .js or .tsx suffic in __tests__ folders
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
## What not to Test?
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