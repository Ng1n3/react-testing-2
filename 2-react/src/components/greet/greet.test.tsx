import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<Greet />);
    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();
  });

  // test('greet renders with a name', () => {
  //   render(<Greet name="Emmanuel" />);
  //   const textElement = screen.getByText('Hello Emmanuel');
  //   expect(textElement).toBeInTheDocument();
  // });
});

/*
[LECTURE] -> Testing Driven development is writing test before software code
? -> WatchMode
? -> test.only, describe.only (run only this test) or fit
? -> test.skip describe.skip(to not run the test) or xit
? -> test by filename p
? -> test by testname t
? -> describe() Group tests, it can also be nested
[LECTURE] -> Filename conventions
? -> .test.js or .test.tsx
? -> .spec.js or .spec.tsx
? -> .js or .tsx suffic in __tests__ folders
[LECTURE] -> Code Coverage is a metric that can help you understand how much of your code is tested
? -> statement coverage: how many of the statements in the software code hs been executed
? -> branches coverage: how many of the branches of the control structures have been executed
? -> function coverage: how many of the functions defined have been called and finally
[LECTURE] -> What to Test?
? -> Test component renders
? -> Test component renders with this.this.props
? -> Test component renders in different states
? -> Test component reacts to events
[LECTURE] -> What not to Test?
? -> Implementation details, test the result not the implementation of the code
? -> Third party code
? -> Code that is not important frpm a user point of view, e.g. A utility function to display the date in a nice way.
*/
