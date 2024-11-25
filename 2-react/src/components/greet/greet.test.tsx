import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test("Greet renders correctly", () =>  {
  render(<Greet/>)
  const text = screen.getByText(/Hello/i)
  expect(text).toBeInTheDocument()
})

test("greet renders with a name", () => {
  render(<Greet name="Emmanuel"/>)
  const textElement  = screen.getByText("Hello Emmanuel")
  expect(textElement).toBeInTheDocument()
})

/*
[LECTURE] -> Testing Driven development is writing test before software code
*/