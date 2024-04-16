import Header, { HeaderProps, menuItems } from "@/components/header"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { Link, animateScroll } from "react-scroll";
import "@testing-library/jest-dom"

jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn()
  },
  Link: (props: any) => <div></div>
}))

const mockProps: HeaderProps = {
  setShowMenu: jest.fn(),
  setShowHeader: jest.fn(),
}

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header {...mockProps} />)
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
  it("menu icon is in the document and calls showMenu on click", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
    act(() => {
      fireEvent.click(menuIcon)
    })
    expect(mockProps.setShowMenu).toHaveBeenCalled()
  })
  //it("menu links are in the document", () => {})
  //it("matches snapshot", () => {})
})