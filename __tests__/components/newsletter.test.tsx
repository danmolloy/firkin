import "@testing-library/jest-dom"
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react"
import NewsletterIndex from "@/app/newsletter";
import axios from "axios"

const mockPost = jest.spyOn(axios, 'post');


/* jest.mock("axios", () => ({
  axios: {
    post: jest.fn()
  }
})) */

describe("<NewsletterIndex />", () => {
  beforeEach(() => {
    render(<NewsletterIndex />)
  })
  it("newsletter-form is in the document", () => {
    const newsletter = screen.getByTestId("newsletter-form")
    expect(newsletter).toBeInTheDocument()
  })
  it("'Newsletter' title is in the document", () => {
    const newsletterTitle = screen.getByText("Join our Mailing List")
    expect(newsletterTitle).toBeInTheDocument()
  })

  it("email input is in the document with label, type and name attrs", () => {
    const emailInput = screen.getByLabelText("Email")
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute("name", "email")
    expect(emailInput).toHaveAttribute("type", "email")
  })

  it("Submit btn is in the document", () => {
    const submitBtn = screen.getByText("Submit")
    expect(submitBtn).toBeInTheDocument()
  })
  it("err messages for name and email render on submit btn click", async () => {
    const submitBtn = screen.getByText("Submit")
    await act(async () => 
      await fireEvent.click(submitBtn)
    )

    const emailErr = screen.getByText("email required")
    expect(emailErr).toBeInTheDocument()
    
    expect(mockPost).not.toHaveBeenCalled()
  })
  it("calls axios.post(args) on submit with expect 'Submitting..' and 'Success' messages", async () => {
       const fakeEmail = "joe@bloggs.com.au"
    
    const emailInput = screen.getByLabelText("Email")
    act(() => {
      fireEvent.change(emailInput, {target: { value: fakeEmail}})
    })
    
    const submitBtn = screen.getByText("Submit")
    await act(async () => {
      await fireEvent.click(submitBtn)
    })
    const newsletterForm = screen.getByTestId("newsletter-form")

    expect(newsletterForm.textContent).toMatch("Submitting...")
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    })

    expect(mockPost).toHaveBeenCalledWith("/newsletter/api", {
      email: fakeEmail,
    })

  }) 
  //it("sendFail message renders if submit throws err", () => {})
  /* it("matches snapshot", () => {
    const contactForm = screen.getByTestId("contact-form")
    expect(contactForm).toMatchSnapshot()
  }) */
  
})