# Make Motivation API

Make Motivate is a quotation logging CRUD app. Users can input quotes they find motivational, update previously input quotes to a randomly selected motivational quote, they can also delete quotes as they wish. The idea was simply to build a pocket friendly quotation book that's always with people (i.e. available from their phone screens) and can provide them with a little 'pick-me-up' of motivational wisdom in those moment when it may be necessary throughout the day (for example to boost confidence before a meeting, starting a day at work, or simply in moments where their confidence could do with a little boost).

**Link to project:** https://make-motivate-api.herokuapp.com/
![MakeMotivate](https://user-images.githubusercontent.com/88390425/179469069-ea8dea0b-12c9-438f-94be-7959ae0dd43a.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JS + EJS, Node.JS (with Express), MongoDB.

This project was an idea to improve and practice building CRUD apps with minimal frameworks or libraries, the only framework employed was Express. It was an opportunity to play with and deepen my understanding of MongoDB, connecting a fully functioning live database with the backend and connecting everything together through EJS as the html templating language as well as client side JS.

## Optimisations
There's plenty of room for optimisations: the CSS could certainly have more time put into it; likewise introducing other libraries such as React could make the rendering more dynamic, quicker and efficient, without having to generate a page refresh on each change via the JS. Although the intention of this project was to be 'bare-bones': not to use frameworks beyond Express.

I didn't add the authors of the quotes to the quotation blocks, as I wanted to place focus on the actual words and their meaning and effects, as well as allow users to impu their own personal quotes without the need for attribution. However, one possible improvement would be to add the author underneath the quotes, so the quote can be attibuted to its correct author.

## Lessons Learned:

I think, as I do everytime I touch a keyboard and start typing code, I learnt a lot from this project. I definitely learnt a lot more about using html templating languages, as I'd not used EJS before; I deepened my love of node.js and Express which are just fantastic tools which I really enjoy using. It was great to get hands on practice implementing a fully functional backend with a database, MongoDB was fun to use and relatively simple for the needs of this project. I'm excited to get to work with it more in future projects and will also look to implement some libraries like Mongoose with it when it's appropriate.