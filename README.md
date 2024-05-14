# Band Website
## Overview
This is a personal website for a jazz big band, targeting concert promoters and audience members. It showcases an about section, stripe checkout integration, events calendar, information about the musicians, contact form and newsletter signup.
Technically, the project has a focus on optimized data fetching, UI/UX design, performance and accessibility.

## Features
### User Experience
- **Events Calendar** fetched via a Server Component from a public Google Calendar. A variety of errors are handled such as a request error, vacant event fields or no events. To keep the calendar up to date, the data is not cached.
- **Stripe Checkout** to accept donations is integrated. Upon a successful transaction, there is a thank you message with confetti covering the window.
- **Contact Form and Newsletter sign up** both rigourously tested to provide a seamless experience, complete with validation, error messages and feedback.
- **Responsive Design** built with a mobile-first philosophy. The website has a number if features unique to mobile view, such as a fly out menu and relocated photos from text sections to the photo gallery.
- **Color changing on scroll** built on scroll event listeners, the header text changes color on scroll to contrast the background.
- **Interactive Experience** gently scroll with React Scroll on menu link click, ensuring a smooth user experience. Additionally, upon a successful donation payment, confetti sprays across the screen.

### Technical Excellence
#### Performance Optimization
Although essentially a static website, measures have been taken to improve performance. This includes:
- Server Components have been used as much as possible. Exceptions include the Header, Footer and Contact Form components.
- Event data is fetched in a Server Component module with Axios.
- All images use NextJS Image Component, optimizing performance by lazy loading.
- `next/font` is utilised for all fonts, removing external network requests.
- Google Lighthouse (score of 100) and Vercel speed insights are regularly monitored to ensure a fast user experience.

#### SEO
- Utilised `next/meta` for improved SEO and web shareability.
- NextJS's built in robots.ts utilised.
- Google Lighthouse monitored for quality (score of 100)

## Technologies Used
- NextJS 14
- TypeScript
- Tailwind CSS
- Jest & React Testing Library
- Formik, Yup, MailChimp API (newsletter sign up) and Nodemailer (contact form)
- Axios
- Stripe
- React Scroll & React-confetti

## Testing
Unit tests with Jest and React Testing Library achieve a very high code coverage threshold (82.95%), focusing on maintaining a consistent UI, critical logic and data fetching errors. An array of Jest matchers (e.g., .toBe, .toEqual, .toBeInTheDocument) are leveraged for effective assertions. Predictable UI output is maintained with snapshot tests for all components. Test suites are regularly reviewed to ensure failures are swiftly captured, and the site continues to be manually tested across a variety of screen sizes. Additionally, CSS effects such as color changing text in the header is manually tested.

## Accessibility
The site has been created with the aim of an inclusive experience for all users. It is continually tested and improved to adhere to Web Content Accessibility Guidelines (WCAG) 2.0 conformance standards, levering tools such as Google Lighthouse (scoring 100/100), ESLint (including `eslint-plugin-jsx-a11y` extension) and Chrome DevTools.

Implemented Features:
- **Semantic HTML** to improve navigation for screen readers and assistive technologies.
- **Keyboard Navigation** makes the entire site accessible for users who rely on a keyboard only.
- **Alternative Text** for all non-text content (i.e. images), ensuring a meaningful and improved access to this content.
- **Colour Contrast** is maintained between text and background colours according to WCAG guidelines, improving readability for users with visually impairments.
- **Focus Management** Clear and visible focus indicators, aiding navigation.
- **Form Accessibility** Concise labels for each input section, in addition to clear error messages upon incorrect data submission.

## Credits
The entire project has been designed and built by Daniel Molloy.

## Getting Started Locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

