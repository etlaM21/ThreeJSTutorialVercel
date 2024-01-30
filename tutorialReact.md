# What is React?

- JavaScript library created by Facebook
- User Interface (UI) library
- Tool for building UI components

## React is made up of components

- React components are JavaScript functions
  - These functions return DOM elements
    - `return <h1>Hello World!</h1>`
  - Because they are functions, they can be classes which extend other components!
- Components can have properties and states, the latter can change throughout a components lifecycle
  - example: total price for items in a shopping cart
- Components are written in JSX (JavaScript XML)
  - JSX is not JavaScript nor HTML
  - JSX is a XML syntax extension to JavaScript that also comes with the full power of ES6 
  - like HTML, JSX tags can have a tag names, attributes, and children
    - If an attribute is wrapped in curly braces, the value is a JavaScript expression
- There are _a lot_ of components that can be installed via npm
  - These need to be imported, for example ThreeJS `
import * as THREE from "three";`

In the React App, the simple example is the `NavButton`:

```jsx
// NavButton.jsx
import React from 'react'

const NavButton = ({theText, theClass}) => {
  return (
    <button className={theClass}>{theText}</button>
  )
}

export default NavButton
```

- the properties (props) are destructured when passed
  - `{theText, theClass}`
  - this makes it easier to read and understand
- values are then inserted into a button
  - `className` is JSX-specific as `class` is already "taken" by HTML

To use the button in our app we import it

```jsx
// App.js
import NavButton from './NavButton';
```

Bonus question: Why not `app.jsx`?

Because the main entry point for any system with Node.js has to be a JavaScript file.

Then we use the component:

```jsx
// App.js
<NavButton theClass="fill" theText="Home" />
<NavButton theClass="outline" theText="About" />
<NavButton theClass="outline" theText="Contact" />
```

This way we can always reuse the Button without writing the full code for a button.

Of course, components can be far more complex!

## React Rendering

- ReactDOM renders the DOM made up of the different components
  - ALL components must be within ONE single node (`root` node)
  -  `ReactDOM.render(element, document.getElementById('root'));` would render an element in root. Witihin the element can be multiple components
- React elements are immutable
  - BUT: React can re-render elements. This way states can change and display something else in their lifecycle