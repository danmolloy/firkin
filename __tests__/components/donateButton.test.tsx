import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import DonateButton from "@/components/donateButton"

describe("<DonateButton />", () => {
  beforeEach(() => {
    render(<DonateButton />)
  })
  it("button is in the document with text and attrs type and role", () => {
    const btn = screen.getByText("Donate")
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute("type", "submit")
    expect(btn).toHaveAttribute("role","link")

  })
  it("form has attrs action and post with expected args", () => {
    const form = screen.getByTestId("donate-btn")
    expect(form).toBeInTheDocument()
    expect(form).toHaveAttribute("action", "/donate/api")
    expect(form).toHaveAttribute("method","POST")
  })
  it("matches snapshot", () => {
    const form = screen.getByTestId("donate-btn")
    expect(form).toMatchSnapshot()
  })
})