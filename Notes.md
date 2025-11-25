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


data types in js
1.primitive
2.non-primitive

1. Primitive Data Types
a. String: Textual data.
b. Number: Integers, floating-point numbers.
c. Boolean: Logical values (true or false).
d. Undefined: Variable declared but not assigned a value
e. Null: Intentional absence of value.
f. Symbol: Unique identifiers (ES6). (ES6= ECMAScrpit 2015 (ES6))


2.  Non-Primitive Data Types
a. Object: Key-value pairs. {}
b. Array: Indexed collections. []
c .Function: Reusable blocks of code. ()
