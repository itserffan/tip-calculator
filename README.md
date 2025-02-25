# Frontend Mentor - Tip Calculator App Solution

This is a solution to the [Tip Calculator App Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help developers improve their coding skills by building real-world projects.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Screenshot](./design/desktop-preview.jpg)

Add a screenshot of your solution here. The easiest way to do this is to use your browser's built-in screenshot tool or an extension like [FireShot](https://getfireshot.com/). Crop and optimize the image as needed.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language

### What I Learned

This project reinforced my understanding of JavaScript event listeners and how to dynamically update the UI based on user input. Below is an example of a function used to calculate the tip amount:

```js
function calculateTip(bill, tipPercentage, numPeople) {
  if (numPeople === 0) return "Cannot divide by zero";
  let tipAmount = (bill * tipPercentage) / numPeople;
  return tipAmount.toFixed(2);
}
```

### Continued Development

Moving forward, I plan to:

- Improve form validation for better user experience
- Enhance accessibility with ARIA attributes
- Add animations for smoother interactions

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Comprehensive documentation for web technologies.
- [CSS Tricks](https://css-tricks.com/) - A great resource for CSS tips and tricks.
- [JavaScript.info](https://javascript.info/) - An in-depth guide to JavaScript concepts.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/itserffan)
- Twitter - [@yourusername](https://www.twitter.com/itserffan)

## Acknowledgments

Thanks to the Frontend Mentor community for providing this challenge and helping developers improve their skills. Special thanks to [any person/resource you found helpful] for guidance on best practices.

---

Feel free to update any placeholder links and add more personal touches!

