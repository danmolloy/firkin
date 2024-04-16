import Home from "@/app/page"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("<Home />", () => {
  beforeEach(() => {
    render(<Home />)
  })
  it("main-page is in the document", () => {
    const mainPage = screen.getByTestId("main-page")
    expect(mainPage).toBeInTheDocument()
  })
  it("<Header /> is in the document", () => {})
  it("<Hero /> is in the document", () => {})
  it("<About /> is in the document", () => {})
  it("<Musicians /> is in the document", () => {})
  //it("<Rep /> is in the document", () => {})
  it("<Calendar /> is in the document", () => {})
  //it("<InstaFeed /> is in the document", () => {})
  it("<Contact /> is in the document", () => {})
  it("<Footer /> is in the document", () => {})
  it("<Menu /> renders on menu icon click", () => {})
  //it("matches snapshot", () => {})
})