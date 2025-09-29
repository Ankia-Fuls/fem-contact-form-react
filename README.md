# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of completed design](./design/Completed%20Frontend%20Mentor%20Contact%20form.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- SASS Styling
- BEM naming convention

### What I learned

I learned how to make a form more accessible. I learned how to use React to validate a form and change the design of the page based on it.

I am happy with the way I used react to adapt the sections based on if the input is valid. The fieldset of the email is shown below.

```js
<fieldset className="form__email">
  <label htmlFor="email">Email Address <span className="form__required" aria-label="Required input.">*</span></label>
  <input type="email" id="email" name="email"
      value={email} onChange={(e) => setEmail(e.target.value)}
      className={(fieldErrors.email_required || fieldErrors.email_valid ? 'form__border--error' : 'form__border--normal')}
      autocomplete="email" required
      aria-invalid={fieldErrors.email_required || fieldErrors.email_valid ? true : false} aria-describedby={fieldErrors.email_required ? "emailRequiredError" : "emailValidError"}>
  </input>
  {fieldErrors.email_required && (
      <p id='emailRequiredError' className="form__error">{fieldErrors.email_required}</p>
  )}
  {(fieldErrors.email_valid && !fieldErrors.email_required) && (
      <p id='emailValidError' className="form__error">{fieldErrors.email_valid}</p>
  )}
</fieldset>
```
The validation is done on sumbit and flags are set based on the results. Since the email has two different error messages, I added a if statement which checks which error is set and describes the error accordingly.

### Continued development

I would like to learn how to use react-hook-form to do this project in the future. I would also like to figure out why and fix the images I am using for the checkbox since it sometimes doesn't fill the entire box.

### Useful resources

- [Form validation JS](https://www.geeksforgeeks.org/javascript/form-validation-using-javascript/) - This helped me understand the principle of form validation using clean JavaScript.
- [Form information FreeCodeCamp](https://www.freecodecamp.org/news/form-validation-in-javascript/) - This gave more information on using forms with standard JavaScript.
- [React and react-hook-form](https://mattburgess.medium.com/why-would-i-use-react-hook-form-8ae7b905953e) - This gave a good overview of form validation with react as well as how to use react-hook-form to do the same thing.
- [Change background image of custom checkbox](https://lucidar.me/en/web-dev/replace-html-checkbox-with-images/) - This was a good explanation on how to create a custom checkbox;
- [Conditional classes REACT](https://stackoverflow.com/questions/30533171/conditionally-applying-class-attributes-in-react) - This showed an example of how to create conditional classes in react.
- [Parent selector in CSS](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector) - This showed me how to select the parent of an element to change the style of the parent if the child is checked.
- [Regex for email validation](https://medium.com/@python-javascript-php-html-css/the-best-regular-expression-for-email-address-verification-42bf83ba2885) - This showed me how to use regex to validate an email address.
- [Aria-invalid and description](https://adrianroselli.com/2022/02/support-for-marking-radio-buttons-required-invalid.html) - This helped explain how to use the aria-invalid and aria-describedby with role radiogroup to mark a fieldset of radio buttons as valid or invalid.

## Author

- Frontend Mentor - [@Ankia-Fuls](https://www.frontendmentor.io/profile/Ankia-Fuls)
- GitHub - [@Ankia-Fuls](https://github.com/Ankia-Fuls)
