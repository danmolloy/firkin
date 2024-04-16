import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Footer from "@/components/footer"
import { animateScroll } from "react-scroll";

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn()
  }
}))

describe("<Footer />", () => {
  beforeEach(() => {
    render(<Footer />)
  })
  it("footer-section is in the document", () => {
    const footer = screen.getByTestId("footer-section")
    expect(footer).toBeInTheDocument()
  })
  it("back to top btn is in the document and calls scrollToTop on click", () => {
    const backToTop = screen.getByText("Back to top")
    expect(backToTop).toBeInTheDocument()

    act(() => {
      fireEvent.click(backToTop)
    })
    expect(animateScroll.scrollToTop).toHaveBeenCalledWith({
        smooth: true, 
        duration: 750
    })
  })
  it("instagram link is in the document", () => {
    const instaLink = screen.getByTitle("Firkin Band Instagram")
    expect(instaLink).toBeInTheDocument()
  })
  //it("developer link is in the document", () => {})
})