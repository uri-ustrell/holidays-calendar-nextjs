### Holidays Calendar

## Usage

```bash
npm install
npm run dev
```

## Description

Simple calendar that displays the public holidays of a country.

## Notes

0. 
Performance was the first concern with this project. As you may notice, I decided to map days instead of storage them in an array, being able to point one thay with no need to iterate. The unique ID for the day is YYYYMMDD, what provides an oportunity of calculate days by adding X to the actual ID. (no needed currently in the project, but maybe a good practice to escalate).

With Redux, probably I'd accumulate months to avoid generating days at each user interaction. Also it could be possible to acumulate year holidays while navegating through months (finally jumping to next or previous year).

1. 
I never used Next.JS framework before, so I decided to let apart the state management with Redux. But probably It'd helped implement better practices: define pure functions for calendar inputs, call APIs with error handling, etc.

For instance, I couldn't implement the one-way logic flow from Redux, which allow a component rerender by updating de state on component's props.

If you'd like to see how I actually implement redux with react:

-   https://github.com/uri-ustrell/paint-react-redux
-   https://github.com/cyanlove/cyan-books-front

2. 
To add a custom year selector we can easily implement it like I did with the country selector.

3. 
I decoupled view components from external libraries, hydrating those only from Actions. This may help migrate libraries, APIs, etc.

4. 
I did the same with reducers. Which in this case are pure functions, but one exception by dayJS. This one could be fixed investing a bit more time.

5. 
Proxy reverse. My browser was giving me some problems with CORS policy when fetching from https://date.nager.at/ API. So rather than mapping responses with browser plugins I prefered to make it easy from every client. This means I added a custom server with a proxy for DEVELOMPENT MODE.

Now it's probably breaking the calls from production build. As long as this is a technical test, I think it's not an inconvenient.

6. 
Tests are incomplete, I know, I admit, I appologise. They are testimonial to show the way I do it. Theres an important lack of tests of view components. Again if you want to check how do I do it with Enzyme and React-testing-library, just check the above linked repositories.
