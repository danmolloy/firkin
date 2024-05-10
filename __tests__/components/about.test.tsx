import { render, screen } from "@testing-library/react"
import About from "@/components/about"
import "@testing-library/jest-dom"

describe("<About />", () => {
  beforeEach(() => {
    render(<About />)
  })
  it("about-section is in the document", () => {
    const aboutSection = screen.getByTestId("about-section")
    expect(aboutSection).toBeInTheDocument()
  })
  it("'About' title is in the document", () => {
    const aboutTitle = screen.getByText("About")
    expect(aboutTitle).toBeInTheDocument()
  })
  it("about blurb is in the document", () => {
    const aboutBlurb = screen.getByTestId("about-blurb")
    expect(aboutBlurb).toBeInTheDocument()
  })
  it("band photo is in the document", () => {
    const bandPhoto = screen.getByAltText("Placeholder for band photo")
    expect(bandPhoto).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const aboutSection = screen.getByTestId("about-section")
    expect(aboutSection).toMatchSnapshot()
  })
})