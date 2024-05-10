import Header, {  menuItems } from "@/components/header"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { Link, animateScroll } from "react-scroll";
import "@testing-library/jest-dom"

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn()
  },
  Link: (props: any) => <div></div>
}))


describe("<Header />", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;

    render(<Header  />)
  })

  it("header-section is in the document", () => {
    const header = screen.getByTestId("header-section")
    expect(header).toBeInTheDocument()
  })
  it("band name is in the document, which scrolls to top on click", () => {
    const bandName = screen.getByText("The Big Firkin Band")
    expect(bandName).toBeInTheDocument()
    act(() => {
      fireEvent.click(bandName)
    })
    expect(animateScroll.scrollToTop).toHaveBeenCalledWith({
      smooth: true, 
      duration: 500
    })
  }) 
  it("<DonateButton /> is in the document", () => {
    const donateBtn = screen.getByTestId("donate-btn")
    expect(donateBtn).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const header = screen.getByTestId("header-section")
    expect(header).toMatchSnapshot()

  })
})