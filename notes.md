# Git Hub Notes
I honestly learned a lot especially because I had to go back through this assignment 
after I was committing and pushing with my startup project. I learned how to resolve conflicts. I learned how to write to github and from github to vs code.

https://github.com/Bretton24/startup/blob/main/README.md

# Simon-CSS Deliverables
### Footer
I changed the footer a little bit because I didn't like how it was faded. I removed the bootstrap coloring and it went back to white.
### Gamer Name
I changed the color of the gamer because I felt like it seemed more seemless.

### HTML
form	Input container and submission	<form action="form.html" method="post">
fieldset	Labeled input grouping	<fieldset> ... </fieldset>
input	Multiple types of user input	<input type="" />
select	Selection dropdown	<select><option>1</option></select>
optgroup	Grouped selection dropdown	<optgroup><option>1</option></optgroup>
option	Selection option	<option selected>option2</option>
textarea	Multiline text input	<textarea></textarea>
label	Individual input label	<label for="range">Range: </label>
output	Output of input	<output for="range">0</output>
meter	Display value with a known range	<meter min="0" max="100" value="50"></meter>

  This is a full path
  https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg
  this is a relative path
  images/photo.jpg
  
  The internal media elements svg and canvas allow you to actually create images directly within your HTML.
  
  The canvas element was introduced to HTML in order to facilitate 2D drawing and animation. The HTML for the canvas element is fairly simple, but actually drawing on the canvas requires JavaScript support. Here again, is our simple red dot example.

<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas>
  
  
  ### CSS
  <link rel="stylesheet" href="styles.css" />
  link to external stylesheet
  
  By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.
  
  Descendant	A list of descendants	body section	Any section that is a descendant of a body
Child	A list of direct children	section > p	Any p that is a direct child of a section
General sibling	A list of siblings	p ~ div	Any p that has a div sibling
Adjacent sibling	A list of adjacent sibling	p + div	Any p that has an adjacent div sibling
  
  this is a descendent combinator
  section h2 {
  color: #004400;
}
  this is a general sibling combinator 
  h2 ~ p {
  padding-left: 0.5em;
}
  
  These are class selectors 
  .summary {
  font-weight: bold;
}
You can also combine the element name and class selectors to select all paragraphs with a class of summary.

p.summary {
  font-weight: bold;
}
  
  this is an id selector
  #physics {
  border-left: solid 1em purple;
}
  this is an attribute selector
  p[class='summary'] {
  color: red;
}
  
  this is a pseudo selector 
  section:hover {
  border-left: solid 1em purple;
}
  
  
  background-color	color	red	Fill the background color
border	color width style	#fad solid medium	Sets the border using shorthand where any or all of the values may be provided
border-radius	unit	50%	The size of the border radius
box-shadow	x-offset y-offset blu-radius color	2px 2px 2px gray	Creates a shadow
columns	number	3	Number of textual columns
column-rule	color width style	solid thin black	Sets the border used between columns using border shorthand
color	color	rgb(128, 0, 0)	Sets the text color
cursor	type	grab	Sets the cursor to display when hovering over the element
display	type	none	Defines how to display the element and its children
filter	filter-function	grayscale(30%)	Applies a visual filter
float	direction	right	Places the element to the left or right in the flow
flex			Flex layout. Used for responsive design
font	family size style	Arial 1.2em bold	Defines the text font using shorthand
grid			Grid layout. Used for responsive design
height	unit	.25em	Sets the height of the box
margin	unit	5px 5px 0 0	Sets the margin spacing
max-[width/height]	unit	20%	Restricts the width or height to no more than the unit
min-[width/height]	unit	10vh	Restricts the width or height to no less than the unit
opacity	number	.9	Sets how opaque the element is
overflow	[visible/hidden/scroll/auto]	scroll	Defines what happens when the content does not fix in its box
position	[static/relative/absolute/sticky]	absolute	Defines how the element is positioned in the document
padding	unit	1em 2em	Sets the padding spacing
left	unit	10rem	The horizontal value of a positioned element
text-align	[start/end/center/justify]	end	Defines how the text is aligned in the element
top	unit	50px	The vertical value of a positioned element
transform	transform-function	rotate(0.5turn)	Applies a transformation to the element
width	unit	25vmin	Sets the width of the box
z-index	number	100	Controls the positioning of the element on the z axis
  
  
  px	The number of pixels
pt	The number of points (1/72 of an inch)
in	The number of inches
cm	The number of centimeters
%	A percentage of the parent element
em	A multiplier of the width of the letter m in the parent's font
rem	A multiplier of the width of the letter m in the root's font
ex	A multiplier of the height of the element's font
vw	A percentage of the viewport's width
vh	A percentage of the viewport's height
vmin	A percentage of the viewport's smaller dimension
vmax	A percentage of the viewport's larger dimension
  
  this imports a font family
  @font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
  @import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
  
  this is how to animate something in css
  p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
  @keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
  @keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
  
  css display elements
  none	Don't display this element. The element still exists, but the browser will not render it.
block	Display this element with a width that fills its parent element. A p or div element has block display by default.
inline	Display this element with a width that is only as big as its content. A b or span element has inline display by default.
flex	Display this element's children in a flexible orientation.
grid	Display this element's children in a grid orientation.
  
  The float css property moves an element to the left or right of its container element and allows inline elements to wrap around it. For example, if we had an aside element followed by a large paragraph of text, we could create the following CSS rule in order to cause the text to wrap around the aside.
  
  @media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
  @media (orientation: portrait) {
  aside {
    display: none;
  }
}
  
  example of a grid .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
  
  example of flex
  body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
  
  example of the children
  header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
  
  section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}

### Java Script
timers show you how long code is running here is an example
  console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
  
  this counter shows how many ties a block of code is called
  console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
  
  string functions
  length	The number of characters in the string
indexOf()	The starting index of a given substring
split()	Split the string into an array on the given delimiter string
startsWith()	True if the string has a given prefix
endsWith()	True if the string has a given suffix
toLowerCase()	Converts all characters to lowercase
  
  compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.
  this is basically a lambda in javascript
  
  Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. 
  
  debounce is used to make sure that a function can only be called once
  
  
  object functions
  push	Add an item to the end of the array	a.push(4)
pop	Remove an item from the end of the array	x = a.pop()
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => 1 < 1)
                                                                  
                                                                  
Example of a JSON file 
                                                                  {
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
 this is how you convert something to javascript
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}

  Regex exAMPLE
 const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true

  Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number, you could write this using an array.                                                                
  Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.
  
  this is the fallback pattern explained
  The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.
  
  An example of destructuring arrays looks like the following.

const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
  
  You can also combine multiple items from the original object using rest syntax.

const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
  
  exporting and importing modules
  export function alertDisplay(msg) {
  alert(msg);
}
  import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
  
  From your HTML, you can specify that you are using an ES module by including a type attribute with the value of module in the script element. You can then import and use other modules. In the example below we create a module in the HTML by specifying its type to be module.
  
  alertDisplay imported module function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler. We also expose the module function by attaching a keypress event.
  
  
  Event listeners
  const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
  
  injecting stuff 
  const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
  
  modifying the dom
  function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
  
  accessing the dom
  function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
  
  
  promise example
  const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
  
  Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.
  
  onst coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
  
  The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.
  
  const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
  
  This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. For example, if we have a function that returns a coin toss promise.
  
  The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.
