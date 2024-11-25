import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test("Greet renders correctly", () =>  {
  render(<Greet/>)
  const text = screen.getByText(/Hello/i)
  expect(text).toBeInTheDocument()
})