HTML 
Headers Formatting 

<!-- The provided HTML code is creating a basic webpage structure with different heading levels. Here's
  what each line is doing: -->
    <p>Welcome to my Home page</p>
    <h1>Welcome to my Home page Header</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>


html 4
div


Semantic HTML5 Elements

Header
Section 
Footer 
Aside
article


Attribute                    |.   Attribute Value       
background-color:                    lightblue;
padding:                                10px;
font-size:                             x-large;
list-style:                           upper-alpha;
list-style:                             decimal;
list-style:                              disc;



*
Universal Selector
{
    margin: 0;
    padding: 0;
}


lists 

ol : ordered list
ul : unordered list
li : list item



CSS :


Inline 
Internal
external

fundamentals :

1. Tag </>
2. ID #
3. class .



                                 (server)
Front- End---------API------------Back-End---------------Database
             
HTML5               |              Java.                     SQL (Structured query lang)
CSS                 |              Nodejs.                   NoSQL( MongoDB)
JS                  |              python.                
ReactJS             |              C#.                       Postgresql(SQL)
TypeScript          |              PHP                       oracle(SQL)

-----------------------------------------------------------------------------------------
                                        |
                                        |   
                                        |
                                (GIT Version control)
                                        |   
                                        |
                          (Front-end, backend, database)
                                      Cloud
                                 (AWS,Azure...)
                                (Domain Mapping)





UTF-8 is a way for computers to understand and display text. Computers only work with numbers, so every letter or symbol must be converted into numbers before it appears on the screen. UTF-8 defines how those letters and symbols are turned into those numbers. It’s popular because it supports every language and emoji, and it keeps English text small and fast. When we write charset="UTF-8", we’re telling the browser: “Read this page using the standard that understands all languages.” This prevents broken characters or strange symbols when the page loads.



The practical effect is simple:
With noindex, the page stays invisible in search results.
With nofollow, the page does not help any linked pages with SEO.

table

rows
colums

statis & dynamic

static:
if the template is not integrated with backend, and totally depended on the front-end only (HTMl, CSS, JS)

dynamic:
if the template is integrated with backend,  (PHP, Python, Java, Node,).



Margin
Padding

Form Controls
1.date
2.month
3.week
4.text
5.email
6.password
7.button
8.radio-button
9.checkbox


Cookies (4kb)

webstorage (5mb)

1. local storage 

2. session storage

Cookies = Login, session, security, authentication
Web Storage = Big data storage, app data, offline data


Local
1. Local storage is a web storage feature that allows websites
to store data in the browser with no expiration time.
2. This means the data remains available even after the user closes
and reopens the browser or the system is restarted. 
3. It is typically used to save long-term data such as
user preferences, themes, or login tokens.

session
1. Session storage is also a browser-based storage method, 
but it only stores data for the duration of a single browser tab session. 
2. Once the tab is closed, all session storage data is automatically deleted. 
3. It is useful for storing temporary data like form inputs or 
navigation steps that don’t need to persist beyond the current session. 
4. Unlike local storage, session storage is not shared across 
tabs — each tab has its own session. 


Git :- 
Git is a distributed version control system that helps you track changes in your code, save different versions of your project, and work with others without overwriting each other’s work. It allows you to create branches, experiment safely, and easily go back to older versions whenever needed.

Git -> Tool for version control (local machine).

GitHub -> Website (by microsoft) to store & manage Git repositories online.

Git Code Commit 

Push=upload
Pop=Delete
pull=download


Fundamental commands

1. git init – Create a new repository

2. git add – Add files to staging

3. git commit – Save changes to local repo

4. git status – Show file changes

5. git clone – Copy a remote repo

6. git push – Upload commits to remote

7. git pull – Download and merge from remote

8. git branch – Show branches

9. git checkout – Switch branches

10. git remote -v – Show connected remote repo


Used daily in real project commands

11. git log – View commit history

12. git merge – Merge another branch

13. git fetch – Download updates without merge

14. git switch – Modern branch switching

15. git stash – Save uncommitted changes

16. git stash pop – Restore stashed work

17. git reset – Undo staged/committed changes

18. git rm – Remove a file

19. git mv – Rename/move a file

20. git diff – See the difference between versions


Bootstrap

UTF-8
1.Unicode Transformation Format is used as 8-bit in html-5, to make our site globally readable and adaptable.

2.UTF-8 is used to encode all the characters in the world. It is used to encode all

3. Amoung 8-bits english is occupied as 1-bit.

4.Meta tags are used for SEO purpose (Search-Engine-Optimization)

5. In html-4 we have UTF as 4 bit (UTF-4) i.e can be used only for single languages.


RWD
Responsive Web Design
1.Bootstrap will adjust components based on the screen size.
2.Bootstrap is a CSS framework that helps you build responsive and modern websites quickly using pre-designed components.



class                 Extra small(<576px)	376       Small(>=576px)       	Medium(>=768px)	        Large >=(992px)	      X-Large>=(1200px)	          XX-Large (>=1400px)
.container	              100%	                      540px	                720px	                    960px	                1140px	                        1320px
.container-sm	            100%	                      540px	                720px	                    960px	                1140px	                        1320px
.container-md             100%	                      100%	                720px                    	960px	                1140px	                        1320px
.container-lg	            100%	                      100%	                100%	                    960px	                1140px	                        1320px
.container-xl            	100%                      	100%                	100%                    	100%	                1140px	                        1320px
.container-xxl	          100%	                      100%	                100%	                    100%	                 100%	                          1320px
.container-fluid	        100%	                      100%                	100%	                    100%	                 100%	                            100%


1. layout
2. Grid System

Layout Examples :-

mobile <576px
mobile large screen ≥576px
Tablets ≥768px
Laptops ≥992px
Desktop/Projectors ≥1200px

Grid System Works on 12 columns system i.e need to call the col between 12 only
like
col-sm-2
col-md-8
col-sm-2

These column should be called inside a row.

Whenever we call a row a column should also be called accordingly.
we cant call row inside a row & column inside a column.

The <span> tag in HTML is an inline container used to style, highlight, or manipulate a specific portion of text or content without breaking the flow of the line. It’s commonly used with CSS or JavaScript to apply styles or add interactivity to small parts of a webpage.


JS

Javascrpit Variables
1. let (local scoped)
2. var (global scoped)
3. const (constant)

Local Scoped (let):
a variable cannot be accessed outside a function without defining.

Global Scope (var):
a variable can be accessed outside a function without defining.

print statement in Document Page:
docoment.write(variable);

Debugging:
console.log(variable)

1.[] 
Array
2.{}
Object
3.()
Function
4.[{}]
Array of Object

array length = 1,2,3,4,5
indexlength = array length -1 (n-1) = 4


data types in js
1.primitive
2.non-primitive

1. Primitive Data Types
a. String: Textual data.
b. Number: Integers, floating-point numbers.
c. Boolean: Logical values (true or false).
d. Undefined: Variable declared but not assigned a value
e. Null: Intentional absence of value.


2.  Non-Primitive Data Types
a. Object: Key-value pairs. {}
b. Array: Indexed collections. []
c .Function: Reusable blocks of code. ()

String = ""

Boolean = true/false (1/0)

Number = 123

hoisting
a variable can be used before declaraion, it called as hositing, to avoid hositing  we use the strict mode(use strict) in script. 

Operators =

1. Arithmetic Operators= Used for mathematical calculations.

Operator    | Description         | Example               | Result
a. +           Addition              5 + 3        =           8
b. -         Subtraction             5 - 3        =          2
c. *          Multiplication         5 * 3        =          15
d. /         Division                5 / 2        =          2.5
e. %         Modulus (remainder)     5 % 2         =          1
f. **        Exponentiation          5 ** 2        =          25
g. ++        Increment              let x =5;     x++  =      6
h. --        Decrement              let x =5;     x--  =      4


2. Assignment Operators= Used to assign values to variables.

Operator      | Description         | Example        | Equivalent To
a. =           Assignment            x = 10              x = 10
b. +=         Add and Assign.        x += 5              x = x + 5
c. -=       Subtract and Assign      x -= 5              x = x - 5
d. *=       Multiply and Assign      x *= 5              x = x * 5
e. /=      Divide and Assign.       x /= 5              x = x / 5
f. %=      Modulus and Assign       x %= 5              x = x % 5
g. **=     Exponentiation Assign.   x **= 2             x = x ** 2

3. Comparison Operators = Used to compare two values.

Operator      | Description            | Example                | Result

a. (==)        Equal to                    5== "5"                 TRUE
b. (===)       Strict equal                5===5                   True
c.  ===       (type+value)                 5 === "5"               FALSE
d. !=          Not equal.                  5 != "5"                FALSE
e. !==        Strict not equal             5 !== "5"               TRUE
f. >            Greater than                5 > 3                 TRUE
g.<            Less than                    5 < 3                FALSE
h. >=      Greater than or equal            5 >= 5               TRUE
i. <=        Less than or equal             5 <= 3               FALSE


4. Logical Operators = Used for logical operations.

Operator      |           Description       |          Example
a.  &&                  Logical AND.                 true && false → false
b. | |                  Logical OR.                        a || b
c. !                    Logical NOT.                  !true → false




5. String Operators=Used to manipulate strings.

Operator   |   Description                  | Example                       | Result
a. +         String Concatenation         "Hello" + "World"                "Hello World"
b. +=       Concatenation assign       let x = "Hi "; x += "Adil";         "Hi Adil"


Array Methods :

1. push()
Adds an item to the end of an array.

2. pop()
Removes an item from the end.

3. unshift()
Adds an item to the beginning.

4. shift()
Removes an item from the beginning.

5. slice()
Copies a portion of the array (does NOT change original).

6. splice()
Adds/removes elements (modifies original).

7. sort()
Sorts array (alphabetically by default).

8. reverse()
Reverses the array.

9. find()
Returns the first element that matches the condition.

10. findIndex()
Same as find(), but returns index instead of value.

11. filter()
Returns a new array with only the elements that match the condition.

12. includes()
Checks if a value exists.

13. map()
Creates a new array by applying a function to each element.


eg :

// let numbers = [10, 20, 30, 40, 50];
 // numbers.push(60);
 // console.log("Numbers Array:", numbers);

 // let numbers = [10, 20, 30, 40, 50];
 // numbers.pop();
 // console.log("Numbers Array after pop:", numbers);


 // let numbers = [10, 20, 30, 40, 50];
 // numbers.shift();
 // console.log("Numbers Array after shift:", numbers);

 // let numbers = [10, 20, 30, 40, 50];
 // numbers.unshift(5);
 // console.log("Numbers Array after unshift:", numbers);

 // let numbers = [10, 20, 30, 40, 50];
 // let b = numbers.slice(0, 2);
 // console.log("Sliced Array:", b);
 // console.log("Original Array after slice:", numbers);

 // let numbers = [10, 20, 30, 40, 50];
 // let b = numbers.splice(1, 3);
 // console.log("Spliced Array:", b);
 // console.log("Original Array after splice:", numbers);

 // let numbers = [10, 20, 30, 40, 50];
 // let b = numbers.splice(0, 2, 15, 25);
 // console.log("Spliced Array:", b);
 // console.log("Original Array after splice:", numbers);

 // let arr = [100, 200, 50, 90, 700]
 // arr.sort(function (a, b) {
 //     return a - b;
 // });
 // console.log("Sorted Array:", arr);

 // let fruits = ["Banana", "Apple", "Mango", "Orange"];
 // fruits.sort();
 // console.log("Sorted Fruits Array:", fruits);


 // let arr = [100, 200, 50, 90, 700]
 // arr.reverse();
 // console.log("Reversed Array:", arr);

 // let nums = [5, 10, 15, 20];

 // let result = nums.find(function (value) {
 //     return value > 10;
 // });

 // console.log("Find result:", result);
 // 15

 // console.log("Nums Array after find():", nums);
 // [5, 10, 15, 20]

 // let nums = [5, 10, 15, 20];

 // let index = nums.findIndex(function (value) {
 //     return value > 10;
 // });

 // console.log("FindIndex result:", index);
 //  2

  // let nums = [5, 10, 15, 20];

 // let result = nums.map(function (value) {
 //     return value + 10;
 // });

 // console.log("Result:", result);

 // let nums = [5, 10, 15, 20];

 // console.log(nums.includes(10));   
 // console.log(nums.includes(25));  


 CRUD :

 1. Create
 2. Read
 3. Update
 4. Delete

JWT

 1. Understanding Cookies :

Cookies are small pieces of data stored in the browser. They help websites remember information about users, like login status, preferences, or shopping cart items.

Stored as name=value(key=value) pairs.
Useful for tracking small data across sessions.


2. how we write a cookie :
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

3. how we read a cookie :
console.log(document.cookie);
// Output: "username=JohnDoe;"


4. Deleting Cookies :
To delete a cookie, set its expiration date to the past:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

CallBack fns :

1. map()
The map() method is used to loop through an array and create a new array with the result of applying a function to each element.

2. setTimeout()
The setTimeout() method runs a function once after a specified delay (in milliseconds).

3. setInterval()
The setInterval() method runs a function repeatedly, at a fixed time interval (in milliseconds), until stopped.



1. create a function to double the give array [1,2,3]

eg :

let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

(num => num * 2)

num = 1 * 2 (0)
num = 2 *2 (1)
num = 3 * 2 (2)

2. Convert all names in the array to uppercase.
let names = ["adil", "syed", "ali"];

Expected Output: ["ADIL", "SYED", "ALI"]

3. Extract only the price values from the products array.
let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 500 }
];

Expected Output: [10, 50, 500]

4. Add a new property isAvailable: true to every product.
let products = [
  { name: "Pen"  },
  { name: "Book" }
];

Expected Output: [
  { name: "Pen", isAvailable: true },
  { name: "Book", isAvailable: true }
]

5. Add ₹ symbol to each salary amount.
let salaries = [25000, 32000, 45000];

Expected Output: ["₹25000", "₹32000", "₹45000"]

6. Given an array of marks, convert them into Pass or Fail.
Marks 40 and above -> "Pass"
Below 40 -> "Fail"
let marks = [78, 35, 90, 28, 45, 20];


Expected Output: ["Pass", "Fail", "Pass", "Fail", "Pass"]

Async/Await
javascript async and await;
1.to create responsive applications in javascript
2.to execute concurrent process
3.no block state or no need to wait till function ends.
4.async and await are used in JavaScript to work with asynchronous operations more easily.
5.They allow code to wait for long tasks (like fetching data) without stopping the entire program.


async -> Marks a function that may run tasks which take time(but returns promise(1/0)).
await -> Pauses the function until the function(promise) finishes, but does not block other code.
Used for -> API calls, database operations, file reading, timers, etc.
Benefit -> Code becomes easier to read and understand (looks like normal step-by-step code).

Real-Life Example 

Example: Ordering Food in a Restaurant

1.You order biryani (this takes time to prepare).

2. But you don’t stand in the kitchen waiting (that would block everything).

3. Instead, you sit and talk with friends (other work continues).

4. When the biryani is ready, the waiter delivers it (result comes later).

This is async behavior:

1.Order placed = Request sent

2. Waiter prepares silently = Awaiting result

3. You keep doing other things = Non-blocking

4. Food delivered = function(promise) resolved


javascript promise


1.it is a special javascript object
2.it will return either resolved or rejected status
3.it always returns response, it wont break during transaction/process
4.reject and resolve both are callback functions it will execute either anyone
5.we access promise by method :
then()
catch()

React Notes

React Js
1. it is a javascript libarary
2.React js is used to create ui components
3.virtual DOM support
4.its very fast and performance
5.single page application(SPA) development
6.component based architectire
7.server side rendering


setup

1. navigate to project folder/directory
cmd : cd foldername

2.how to create react setup
cmd: npm install create-react-app

3.how to create react project
cmd: npx create-react-app reactproject
note: project name should be in small letters

4. run/execute react project
cmd: npm start


Component Syntax

1. Create a js file,
2. create a funciton 
3. Return the function
4. export the function
5. import the function in app.js/index.js
6. render(call) the function in app.js/index.js

function Demo() {
  return (
    <div>
      <h1>This is Demo Function from demo.js file</h1>
    </div>
  );
}
export default Demo();

1. function/component 
2. component defination
3. component calling(exporting) [to reuse this same component we must import the exported component to the file we are expecting to use it]
