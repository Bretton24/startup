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

  
  
 ## Fetch:
  fetch is basically the way to get others apis. 
  
  URL's are the location of a web resource such as websites, webpages, font, image, videos.
  
  URLS are broken down into each of these parts
  Part	Example	Meaning
Scheme	https	The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
  
Domain name	byu.edu	The domain name that owns the resource represented by the URL.
  
Port	3000	The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
  
Path	/school/byu/user/8014	The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
  
Parameters	filter=names&highlight=intro,summary	The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
  
Anchor	summary	The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.
  
Ports are part of the web. Ports from 1024 to 49151 are used for external requests. ports 0 to 1023 represent standard protocals. Higher than that are used for dynamic connections.
 When we opened up our web server we opened up port 22s o we could open up a remote console using ssh. We then used ports 80 and 443 but it automatically changes it to 443 so it can be secure.
  
  ## HTTP
  Web browser and web server communicate by sending requests and responses that is how the web communicates. 
  
  Doing this:
  curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
  would look like this in HTTP:
  GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
  
  Here is the general format of a request:
  <verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
    
    Here is what the response would look like for that request:
    HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
  
  Here is the general syntax of an http response:
  <version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
    
    
These are the verbs and these are super important for me to know!!!!!!!
    
    GET	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
    
POST	Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
    
PUT	Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
    
DELETE	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
    
OPTIONS	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.
    
It is also super important that I know the status codes and I use them so the client can interpret the response correctly:
    
    They're broken up into 5 blocks
    
    1xx - Informational.
    
2xx - Success.
    
3xx - Redirect to some other location, or that the previously cached resource is still valid.
    
4xx - Client errors. The request is invalid.
    
5xx - Server errors. The request cannot be satisfied due to an error on the server.
    
 Some common examples would be:
    
    100	Continue	The service is working on the request
    
200	Success	The requested resource was found and returned as appropriate.
    
201	Created	The request was successful and a new resource was created.

204	No Content	The request was successful but no resource is returned.

    304	Not Modified	The cached version of the resource is still valid.
    
    307	Permanent redirect	The resource is no longer at the requested location. The new location is specified in the response location header.
    
308	Temporary redirect	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
    
400	Bad request	The request was malformed or invalid.
    
401	Unauthorized	The request did not provide a valid authentication token.
    
403	Forbidden	The provided authentication token is not authorized for the resource.
    
404	Not found	An unknown resource was requested.
    
408	Request timeout	The request takes too long.
    
409	Conflict	The provided resource represents an out of date version of the resource.
    
418	I'm a teapot	The service refuses to brew coffee in a teapot.
    
429	Too many requests	The client is making too many requests in too short of a time period.
    
500	Internal server error	The server failed to properly process the request.
    
503	Service unavailable	The server is temporarily down. The client should try again with an exponential back off.
    
    
 HTTP headers are also useful in helping us to understand the metadata about a request and a response:
    
    Authorization	Bearer bGciOiJIUzI1NiIsI	A token that authorized the user making the request.
    
Accept	image/*	What content format the client accepts. This may include wildcards.
    
Content-Type	text/html; charset=utf-8	The format of the response content. These are described using standard MIME types.
    
Cookie	SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
    
Host	info.cern.ch	The domain name of the server. This is required in all requests.
    
Origin	cs260.click	Identifies the origin that caused the request. A host may only allow requests from specific origins.
    
Access-Control-Allow-Origin	https://cs260.click	Server response of what origins can make a request. This may include a wildcard.
    
Content-Length	368	The number of bytes contained in the response.
    
Cache-Control	public, max-age=604800	Tells the client how it can cache the response.
    
User-Agent	Mozilla/5.0 (Macintosh)	The client application making the request.
    
    
 Cookies are how you track client
    
   Fetch
    fetch uses a promise and requests info from url
    fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
    
    
## Service

A web service is usually divided up into multiple service endpoints.

Grammatical - everything in HTTP is a resource or object that can be used

Readable - make it so your endpoints make sense

Discoverable - make it so the endpoint is easy to read

Compatible - make it so things don't break when you add new clients

Simple - keep your endpoints focused on doing one thing

Documented - It makes it way easier if you plan your endpoints from the get go.



### RPC

RPC's are a simplified way of interacting with other code across the network. It makes it so its like calling a function like its a local function call.

### Rest

Another way to expose endpoints 

### GraphQL

Focused on manipulating data. this was created so that you wouldn't have to make as many RPC and Rest calls. Graphql allows the user to filter the things out they don't want and keep the things they want in a query.


### Node.js

Was created and allows for javascript to be run on the server side rather than just frontend. 

1 Create your project directory
2 Initialize it for use with NPM by running npm init -y
3 Make sure .gitignore file contains node-modules
4 Install any desired packages with npm install <package name here>
5 Add require('<package name here>') to your application's JavaScript
6 Use the code the package provides in your JavaScript
7 Run your code with node index.js


### Express

Express helps out with the following

1Routing requests for service endpoints

2Manipulating HTTP requests with JSON body content

3Generating HTTP responses

4Using middleware to add functionality


### Storage Services

Don't store information on the server. Think of the server as temporary.

AWS S3 is a really good option for storing things. 

MongoDB is a lot better than SQLDatabases because it effectively is a bunch of JSON objects that are easily callable through other means. 

It uses something called a collection which is a large array of javascript objects each with a unique ID

It looks like this 

[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];




### Web Frameworks

Basically combine HTML CSS and Javascript into a new file that is a hybrid of all 3. 

Remembering user authentication a lot of times has to do with using cookies.

When creating an authentication endpoint this usually requires two service endpoints. One to create an authentication credential & one to login. 

There is also a getMe endpoint that returns informaton about the authenticated user. 






## Final Exam Study Guide

How does the Web Service work. Data is exchanged through the use of HTTPS protocol. From the frontend use of JavaScript you can make requests to external services around the world. To make a request like this you supply the url into the fetch function that is built in the browser. Web service will serve up static frontend as well as provide endpoints for the fetch requests to handle. This functionality is called the backend. Soemtimes called endpoints or API's. Backend web services can also use fetch to make requests to other web services. Backend endpoints can combine two request into one. 

### URL
this is the lcation of a web resource. In a URL the only parts that are required are the scheme and the domain aname. 
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>


### Ports
When you connect to a device on the internet you need both an IP address and a numbered port. 
Standard ports are 0 to 1023. 1024 to 49000 are requesting entities and are commonly used for internal development. 

### HTTP
HTTP is how the internet speaks to eachother. Web browser and web server send requests to eachother and responses. Browser makes request and server generates a response. 
General HTTP request looks something like this.
GET /hypertext/WWW/Helping.html HTTP/1.1
<verb> <url path, parameters, anchor> <version>
Host: info.cern.ch
[<header key: value>]*
Accept: text/html
  <body>

An HTTP response would look something like this:
HTTP/1.1 200 OK
<version> <status code> <status string>
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html
[<header key: value >]*
[

  <body>
]

HTTP request verbs
GET - gets the requested resource. This can represent a request to get a single rsoucre or a resoruce representing alist of resources.
POST - create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT - Update a resource. Either the URL path, HTTP header, or body must contain the unique ID fo teh resource being updated. The body of the request should contain the updated resource. The body of the response may containe the resulting updated resource.
DELETE - Delete a resource. Either the URL path or HTTP header must containe the unique ID fo the resource to deete.
OPTIONS - Get metadata about a resource. Usually only HTTP headers are returned. The rsoucr itself is not eeturned. 

HTTP status codes in HTTP responses. 
100s - informational
200s - Success
300s - Redirect to some other location, or that the previously cached resource is still valid.
400s - Client errors. The request is invalid.
500s - Server errors. The request cannot be satisfied due to an error on the server. 

Headers
Authorization	Bearer bGciOiJIUzI1NiIsI	A token that authorized the user making the request.
Accept	image/*	What content format the client accepts. This may include wildcards.
Content-Type	text/html; charset=utf-8	The format of the response content. These are described using standard MIME types.
Cookie	SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
Host	info.cern.ch	The domain name of the server. This is required in all requests.
Origin	cs260.click	Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin	https://cs260.click	Server response of what origins can make a request. This may include a wildcard.
Content-Length	368	The number of bytes contained in the response.
Cache-Control	public, max-age=604800	Tells the client how it can cache the response.
User-Agent	Mozilla/5.0 (Macintosh)	The client application making the request.


Body - The format of the body of an HTTP request is defined by the Content-Type header. An example would be HTML text (text/html), a binary image format (image/png), JSON (application/json) or JavaScript.

### Cookies
The server will send a cookie to the client in the HTTP header. The client will then send that header on subsequent requests to the server whihc allows for the server to distinguish who the client is by creating a unique identifier. 


### SOP & CORS Security
For a hacker to duplicate something like byu.intstructure all it would have to do is request all of the same login, and service endpoints and display it on their webpage. Because of this Same Origin Policy or SOP was created. Simply put, SOP only allows Javascript to make request to a domain if it is the same domain that the user is currently viewing. This provides a lot of security but if you wanted to build a service that any web app can use it would violate the SOp and fail. Cross Origin Resource Sharing or CORS was created. CORS allows the client to specify the orgin of tha request adn then let the server respond with what origins are allwoeed. For example if i had an image the server could specify that this image is open for all sources. or if the srver doesn't specify it wil just make the browser the same origin. 

For example the hacker HTTP request form the hacker sit to the courses authentication service would look like this. 
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com

In response the course website would return :
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com

The browser would see that the actual origin is different from the Host and would block the response. 

Using third party services
If i want to make requests to a third party service i need to make sure the domain allows requests as specified by the Acess-Control-Allow-Origin heder it returns. For eample if i make a request to icanhazdadjoke.com it will respond with something that i like because the access-control-allow-origin returns * which means that i can request from any endpoint in the website. Or if the header explicitly gives ascces to your domain. here are those two examples.

HTTP/2 200
access-control-allow-origin: *

Did you hear about the bread factory burning down? They say the business is toast.

HTTP/2 200
access-control-allow-origin: https://cs260.click

I’ll tell you something about German sausages, they’re the wurst


### FETCH 
the fetch API is the preferred way to make HTTP requests from JAvascript. Basic usage of fetch takes a URL and returns a promise. the promise then funciton takes a callback function that is asynchronously calld when the requested URL content is obtained. If the returned content is of type application/json you can us the json fucntion on the response object to conver it to a JAvascript object.

For example this is a GET request.
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });

  this fetches the url. then takes the response and transforms it from a json object to a Javascript object. For example that would output this>
  {
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};

To do a POST request you populate the options parameter with the HTTP method and headers.
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // this is the method that is used. telling the fetch function to "post" something to the above URL.
  body: JSON.stringify({ //the body JSON.stringify() makes all of the parameters into a JSON string. 
    title: 'test title', //this would be a title its sendng
    body: 'test body', //this would be the body of the code
    userId: 1, //this would be the userId.
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8', //this specifies what the Content-type would be. 
  },
})
  .then((response) => response.json()) //this is called on the promise that is returned by the fetch function. this changes the JSON string to a javascript object whihc you then can use to extract information from.  
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });



## Service Design
Web services provide interactive funcitonality of your web application. THey can authenticate users, track their session state, provide, store and analyze data, connect epers, and aggregate user information. 

Web services are usually provided over HTTP so HTTP greatly influences the design of the service. 
For example 
GET = list the comments
POST = create a comment
PUT = update a comment
DELETE = delete a comment

All fo the cireria you apply to creating well designed code functions also apples wheen exposing service endpoints. 
Grammatical - With HTTP everything is a resource (think noun or object). You act on the resource with an HTTP verb. For example, you might have an order resource that is contained in a store resource. You then create, get, update, and delete order resources on the store resource.

Readable - The resource you are referencing with an HTTP request should be clearly readable in the URL path. For example, an order resource might contain the path to both the order and store where the order resource resides: /store/provo/order/28502. This makes it easier to remember how to use the endpoint because it is human readable.

Discoverable - As you expose resources that contain other resources you can provide the endpoints for the aggregated resources. This makes it so someone using your endpoints only needs to remember the top level endpoint and then they can discover everything else. For example, if you have a store endpoint that returns information about a store you can include an endpoint for working with a store in the response.

Compatible - When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand. Consider the two following JSON response versions.

Simple - Keeping your endpoints focused on the primary resources of your application helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources. It is very helpful to write some simple class and sequence diagrams that outline your primary resources before you begin coding. These resources should focus on the actual resources of the system you are modeling. They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.

Documented - The Open API Specification is a good example of tooling that helps create, use, and maintain documentation of your service endpoints. It is highly suggested that you make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation. Creating an initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design and produce a better final result. Providing access to your endpoint documentation along with your production system helps with client implementations and facilitates easier maintenance of the service. The Swagger Petstore example documentation is a reasonable example to follow.


3 Ways of exposing endpoints

Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb. The actual verb and subject of the function call is represented by the function name. For example, deleteOrder or updateOrder. The name of the function is either the entire path of the URL or a parameter in the POST body.

REST
Representational State Transfer (REST) attempts to take advantage of the foundational principles of HTTP. This is not surprising considering the principle author of REST, Roy Fielding, was also a contributor to the HTTP specification. REST HTTP verbs always act upon a resource. Operations on a resource impact the state of the resource as it is transferred by a REST endpoint call. This allows for the caching functionality of HTTP to work optimally. For example, GET will always return the same resource until a PUT is executed on the resource. When PUT is used, the cached resource is replaced with the updated resource.

GRAPHQL
GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST). The heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered. GraphQL was developed to address frustration concerning the massive number of REST, or RPC calls, that a web application client needed to make in order to support even a simple UI widget.

Instead of making a call for getting a store, and then a bunch of calls for getting the store's orders and employees, GraphQL would send a single query that would request all of that information in one big JSON response. The server would examine the query, join the desired data, and then filter out anything that was not wanted.


## NODE.JS
Whenever you download packages for node they will be downloaded to package.json file. The package.json file has three main things. 1. metadata about your project such as its name and the default entry javascript file. 2. comands or scripts that you can execute to do things like run, test or distribute your code. 3. packages that this project depends on. Once you start installing dependencies these packages will start to be added to the package-lock.json file and you don't want this to get super large. ONce you have a package installed you can now reference it using the require function and including the package name. Then you can call an object and it will print out that joke. 

## Express
Node.js works great for little projects. If you're trying to buid a full stack website you need something like Express. Express is a node package. Everything in express uses middleware fucntions. Express supports all of the HTTP verbs such as get post all you have to do is call those methods with teh app object. 

Defining Routes
app.get('/store/provo' //url path matching parameter, (req, res, next) => { //a callback function if the pattern matches. 3 params = Http request object, Http response object, Next is the next routing function that express will call if this function wants another router resposne. 
  res.send({name: 'provo'}); this is the repsonse (name: provo);
});
you can then reference the pattern by calling the req.params method.

MiddleWare
Mediator is what receives a request and then passes it to the middle ware functions. The order that you add your middleware functions to the path is the order that they will be read. You can create your own middle ware functions. 
app.use(express.static('public')); this one uses 

Third party middleware
you can also install third party middle ware. for exmaple npm instlal cookie-parser which allows you to use a cookie parser. You can also have middle ware that handles errors. 

here is an example express page
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});


## Storage Services
Use Aws

## Data Services
They used to use SQL databases but now peopel use mongodb because it uses JSON objects. Mongo DB stores things as a collection. A collection is basically a large amount of JSON files. Each JSON object has its own id.
Here is an exAMPLE
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];


here is ana example of using mongoDB methods
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });


const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

onst collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);

const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));



## Authorization
Account creation and login. 

Create authentication endpoint. 
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

Login authentication endpoint.
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

GetMe endpoint
GET /user/me HTTP/2
Cookie: auth=tokenHere
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}


## Web Service
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});


Using the Database
When using the database we can handle requests by passing the response into express.json. 
We can implement the getuser and the create user methods.
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}


Generating authentication tokens. We can use the pakage uuid which stands for Universally Unique identifier which creat a random unique ID.

const uuid = require('uuid');

token: uuid.v4();

We then need to secure our passwords. We want to cryptographically hash the password so that we never store the actual password. We do this through bcrypt


const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

PAssing authentication tokens
We need to pass our generated authentication token to the browser when the login endpoin is called. We use HTTP cookies. Cookie parser uses a variety of secre methods. 
httpOnly tells the browser to not allow JavaScript running on the browser to read the cookie.
secure requires HTTPS to be used when sending the cookie back to the server.
sameSite will only return the cookie to the domain that generated it.

const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


The login authorizaiton endpoint needs to get the ahsed password from the database and compare it to the provided password using bcryp.compare. if the passowrd doesn't match or there is no user with the vien meial the endpoint returns status 401 unauthorized. 

We now need to implement the getme endpoint. 

app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});


## WebSocket

Websocket allows for the serverr to send messages to the client. here is an example of creating a websocket conversation.

const socket = new WebSocket('ws://localhost:9900'); //this creates a new service of websocket on port 9900

socket.onmessage = (event) => { // event handler calls the onmessage method which will cause an event that will say received and then log the event data received.
  console.log('received: ', event.data);
};

socket.send('I am listening'); //this sends a message to the server telling it that socket is listening.

The server uses the ws package to create a websocket server that is listening on the sme port the browser is using. When you specify the port you are telling the server to listen fro HTTP connections ont hat prot and to upgrade them to a websocket connection if the request connection: Upgrade




## Web Frameworks
Does a great job of modularizing code and providing tools for completing common application tasks. JSX is converted into HTML and Javascript usng a preprocessor called Babel. 

Example fo JSX
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);

Babel will convert that into a valid Javascript file
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);

## Components
One of the primary purposes of a component is to render a user interface. 
a JSX file tontaing a reat component element named Demo would cause React to load the Demo component, call the render function, and isert the rsult into the palce of the demo element in this code. 
<div>
  Component: <Demo />
</div>

React component
The transpiler would replace this tag with the resulting rendered HTML
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
HTML
<div>Component: <b>Hello world</b></div>


Properties
React components also allow you to pass information to them in the form of element properties> the component receives the properties in its constructor and thenc an dispaly them when it renders. 
JSx
<div>Component: <Demo who="Walke" /><div>
React Component
fucntion Demo(props) {
  return <b> Hello {props.who} </b?;>
}

Resulting HTML 
<div>Component: <b>Hello Walke</b></div>


Properties
React components also allow you to pass information to them in the form of element properties. The component receives the properties in its constructor and then can display them when it renders.

JSX

<div>Component: <Demo who="Walke" /><div>
React component

function Demo(props) {
  return <b>Hello {props.who}</b>;
}
Resulting HTML

<div>Component: <b>Hello Walke</b></div>
State
In addition to properties, a component can have internal state. Component state is created by calling the React.useState hook function. The useState function returns a variable that contains the current state and a function to update the state. The following example creates a state variable called clicked and toggles the click state in the updateClicked function that gets called when the paragraph text is clicked.

const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
You should note that you can use JSX even without a function. A simple variable representing JSX will work anyplace you would otherwise provide a component.

const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
Class style components
In addition to the preferred function style components demonstrated above, React also supports class style components. However, you should note that the React team is moving away from the class style representation, and for that reason you should probably not use it. With that said, you are likely to see class style components and so you should be aware of the syntax. Below is the equivalent class style component for the Clicker component that we created above.

The major difference is that properties are loaded on the constructor and state is set using a setState function on the component object.

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
Reactivity
A component's properties and state are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.

☑ Assignment
Create a fork of this CodePen and experiment.

Try the following:

Add a new property to the Demo component that provides the background color for the component.
Add another state variable that changes the color on a mouse over event.
When you are done submit your CodePen URL to the Canvas assignment.

🧧 Possible solution
If you get stuck here is a possible solution.

function App() {
  return (
    <div>
      Function Style Component: <Demo who='function' color='yellow' />
    </div>
  );
}

const Demo = ({ who, initialColor }) => {
  const [color, setColor] = React.useState(initialColor);
  const [outlook, setOutlook] = React.useState('beautiful');

  function changeOutlook() {
    setOutlook(outlook === 'exciting' ? 'beautiful' : 'exciting');
  }

  function changeColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor('#' + randomColor);
  }

  return (
    <div className='component' onMouseOver={changeColor} style={{ background: color }}>
      <p>
        Hello {outlook} {who}
      </p>
      <button onClick={changeOutlook}>change</button>
    </div>
  );
};

Toolchains
As web programming becomes more and more complex it became necessary to abstract away some of that complexity with a series of tools. Some common functional pieces in a web application tool chain include:

Code repository - Stores code in a shared, versioned, location.
Linter - Removes, or warns, of non-idiomatic code usage.
Prettier - Formats code according to a shared standard.
Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
Testing - Automated tests at multiple levels to ensure correctness.
Deployment - Automated packaging and delivery of code from the development environment to the production environment.
The toolchain that we use for our React project consists of GitHub as the code repository, Vite for JSX, TS, development and debugging support, ESBuild for converting to ES6 modules and transpiling (with Babel underneath), Rollup for bundling and tree shaking, PostCSS for CSS transpiling, and finally a simple bash script (deployReact.sh) for deployment.

You don't have to fully understand what each of these pieces in the chain are accomplishing, but the more you know about them the more you can optimize your development efforts.

In the following instruction we will show you how to use Vite to create a simple web application using the tools mentioned above. We will then demonstrate how to convert your startup into a modern web application by converting Simon to use Vite and React.

Vite
📖 Deeper dive reading: Vite

Now that we have covered the basics of React, we want to extend our usage to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interface (CLI) to initially set up a web application. Using a CLI saves you the trouble of configuring the toolchain parameters and gets you quickly started with a default application.

For our toolchain we are going to use Vite. Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. To get started with Vite, let's first build a simple web application. Later we will convert Simon over to React using Vite. This will teach you what you need to know in order to move your startup to React.

To create a new React-based web application using Vite, open your console and run the following commands:

npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
This will create a new web application in the demoVite directory, download the required 3rd party packages, and start up the application using a local HTTP debugging server. You can tell Vite to open your browser to the URL that is hosting your application by pressing o, or press h to see all of the Vite CLI options.

Vite Demo

Congratulations! You have just created your first React-enabled web application.

Once you have played around with the application in your browser, you can return to your console and stop Vite from hosting the application by pressing q.

Generated project
Now, let's explore the application files that Vite created. From the console, use VS Code (code .) to open the project directory and take a look at the files.

Directory	File	Purpose
./		
index.html	Primary page for the application. This is the starting point to load all of the JSX components beginning with main.jsx.
package.json	NPM definition for package dependencies and script commands. This is what maps npm run dev to actually start up Vite.
package-lock.json	Version constraints for included packages (do not edit this).
vite.config.js	Configuration setting for Vite. Specifically this sets up React for development.
./public		
vite.svg	Vite logo for use as favicon and for display in the app.
./src		
main.jsx	Entry point for code execution. This simply loads the App component found in App.jsx.
index.css	CSS for the entire application.
App.jsx	JSX for top level application component. This displays the logs and implements the click counter.
App.css	CSS for the top level application component.
./src/assets		
react.svg	React logo for display in the app.
The main files in the application are index.html, main.jsx, and App.jsx. The browser loads index.html which provides the HTML element (#root) that the React application will be injected into. It also includes the script element to load main.jsx.

main.jsx creates the React application by associating the #root element with the App component found in App.jsx. This causes all of the component render functions to execute and the generated HTML, CSS, and JavaScript to be executed in index.html.

File relationship

JSX vs JS
The Vite CLI uses the .jsx extension for JSX files instead of the JavaScript .js extension. The Babel transpiler will work with either one, but some editor tools will work differently based upon the extension. For this reason, you should prefer .jsx for files that contain JSX. The developers at AirBNB had an interesting conversation on this topic that you might browse if you would like to consider the differing opinions on this subject.

Building a production release
When you execute npm run dev you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment you need to run npm run build. This executes the build script found in your package.json and invokes the Vite CLI. vite build transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named dist.

➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms
Deploying a production release
The deployment script for Simon React (deployReact.sh) creates a production distribution by calling npm run build and then copying the resulting dist directory to your production server.

Take some time to build a production release by running npm run build. Then examine what Vite actually builds by examining the dist directory. For example, if you look at the dist/assets directory you will see the bundled and minified JavaScript and CSS files.

☑ Assignment
Now that you have reviewed the application in VS Code, take a moment to manipulate the files and see what impact your changes have. If you break the application, and can't figure out how to fix it, just delete the demo directory and start again. The more you play around with this code, the better you will understand how all the pieces of the application fit together.

Make the following modifications:

Alter the CSS to change background and text colors to something different.
Replace the text in the App component with your name.
Change the counter to increment by 10 instead of by one.
After these changes, the application should look similar to this:

React altered

When you are done, submit a screen capture of the altered application to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.


Router
🔑 Required reading: React Router DOM Tutorial

A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.

React does not have a standard router package, and there are many that you can choose from. We will use react-router-dom Version 6. The simplified routing functionality of React-router-dom derives from the project react-router for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.

React Router

A basic implementation of the router consists of a BrowserRouter component that encapsulates the entire application and controls the routing action. The Link, or NavLink, component captures user navigation events and modifies what is rendered by the Routes component by matching up the to and path attributes.

// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
☑ Assignment
Create a fork of this CodePen and add another component for the path of /scores.

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

Reactivity
Making the UI react to changes in user input or data, is one of the architectural foundations of React. React enables reactivity with three major pieces of a React component: props, state, and render.

When a component's JSX is rendered, React parses the JSX and creates a list of any references to the component's state or prop objects. React then monitors those objects and if it detects that they have changed it will call the component's render function so that the impact of the change is visualized.

The following example contains two components: a parent <Survey/> component and a child <Question/> component. The Survey has a state named color. The Question has a property named color. The Survey passes its color state to the Question as a property. This means that any change to the Survey's color will also be reflected in the Question's color. This is a powerful means for a parent to control a child's functionality.

The Question component also has a state named answer. The value of answer is displayed as part of the Question's content. The user can interact with this state through HTML radio input elements. When one of the inputs is changed the Question's onChange function is called and the answer state is updated to reflect the user's choice. This automatically causes the display of the answer to be updated.

Be careful about your assumptions of when state is updated. Just because you called updateState does not mean that you can access the updated state on the next line of code. The update happens asynchronously, and therefore you never really know when it is going to happen; you only know that it will eventually happen.

// The Survey component
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };
  return (
    <div>
      <h1>Survey</h1>
      {/* Pass the Survey color state as a property to the Question.
          When the color changes the Question property will also be updated and rendered. */}
      <Question color={color} />

      <p>
        <span>Pick a color: </span>
        {/* Pass the Survey color state as a property to the input element.
            When the color changes, the input property will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ color }) => {
  const [answer, updateAnswer] = React.useState('pending...');

  function onChange({ target }) {
    updateAnswer(target.value);
  }

  return (
    <div>
      <span>Do you like this</span>
      {/* Color rerendered whenever the property changes */}
      <span style={{ color: color }}> color</span>?
      <label>
        <input type='radio' name='answer' value='yes' onChange={(e) => onChange(e)} />
        Yes
      </label>
      <label>
        <input type='radio' name='answer' value='no' onChange={(e) => onChange(e)} />
        No
      </label>
      {/* Answer rerendered whenever the state changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
☑ Assignment
Create a fork of this CodePen and experiment. Try changing the input from using the color and radio button, to using an edit box that reactively displays the text as you type.

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

🧧 Possible solution
If you get stuck here is a possible solution.

// The Survey component
const Survey = () => {
  const [text, updateText] = React.useState('');

  const onChange = (e) => {
    updateText(e.target.value);
  };
  return (
    <div>
      <h1>Survey</h1>
      <Question text={text} />

      <p>
        <span>Type some text: </span>
        <input type='text' onChange={(e) => onChange(e)} placeholder='type here' />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ text }) => {
  return (
    <div>
      <p>You typed: {text}</p>
    </div>
  );
};

Tic-Tac-Toe tutorial
The tic-tac-toe tutorial provided on the React website is a good way to get familiar with the basics of React. The tutorial starts out simple and then introduces different concepts until you have built a fully functional application.

tictactoe

☑ Assignment
Complete the tic-tac-toe tutorial. Note that the tutorial uses codesandbox.io instead of CodePen. You will need to create an account there in order to save your fork of the project. Don't worry about following the tutorial exactly. Feel free to take things in whatever direction interests you. The point is to experiment and have fun.

When you are done submit your CodeSandbox URL to the Canvas assignment.

React hooks
📖 Recommended reading: Reactjs.org - Hooks Overview

React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already seen one use of hooks to declare and update state in a function component with the useState hook.

function Clicker({initialCount}) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));
useEffect hook
The useEffect hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.

function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
You can also take action when the component cleans up by returning a cleanup function from the function registered with useEffect. In the following example, every time the component is clicked the state changes and so the component is rerendered. This causes both the cleanup function to be called in addition to the hook function. If the function was not rerendered then only the cleanup function would be called.

function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
This is useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources.

Hook dependencies
You can control what triggers a useEffect hook by specifying its dependencies. In the following example we have two state variables, but we only want the useEffect hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the useEffect call.

function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
If you specify and empty array [] as the hook dependency then it is only called when the component is first rendered.

Note that hooks can only be used in function style components and must be called at the top scope of the function. That means a hook cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.