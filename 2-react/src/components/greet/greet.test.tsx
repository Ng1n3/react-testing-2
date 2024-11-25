import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<Greet />);
    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();
  });

  test('greet renders with a name', () => {
    render(<Greet name="Emmanuel" />);
    const textElement = screen.getByText('Hello Emmanuel');
    expect(textElement).toBeInTheDocument();
  });
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
*/
