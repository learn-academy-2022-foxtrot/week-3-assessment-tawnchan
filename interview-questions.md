# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX stands for Javascript XML, an extension of Javascript. It does adds on functions that Javascript wasn't normally meant for. There is a tool named babel that translates JSX files so that javascript can understand the code and synthax. JSX scans through the entire document and looks for markups such as tags. and using use tags it applies various components, such as logic components that contain functions, and state component that contain parameters of data... such as HTML tags. So, you can use JSX functions to print html content to appear in the browser.. and you can also use other functions to create logic.. all seemingly running in the background when specific conditions are met.. such as when the user clicks buttons and such.  

HTML is not all of that. HTML does not run logic, its more of a markup language to markup the webpage content. 

Researched answer: My answer up top was actually my research answer as I wasn't sure exactly what the difference was or even specifically understood both indepth. So I did some reading and watched some videos on both. meow. 

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer:  Yarn is a package manager that installs packages preloaded with various codes that are shared by developers through these packages, allowing developers to streamline web development.  React apps already have yarn built into it. Another package manager that was popular was npm, but since the release of yarn which was developed by Facebook(Meta) and some other companies. When yarn is run, files in the src folder gets modified.

Researched answer:  There is another package manager called npm. Yarn is a javascript package manager used to install javascript packages and modules.  It is faster and more reliable and secure than npm (node package manager). Yarn uses specific syntax and funcationality.   

3. What is an anonymous function in JavaScript?

Your answer: There are functions and there are function expressions.  Functions are declared and created by declaring a function name and structuring its methods/logic. and invoking it by calling it and passing through arguments and properties.  Function expressions are similar to functions, except that it is expressed through a variable. 

With function expressions, we do not need to name or declare the function name since we are passing the function method to an assigned variable, and we can use the variable to call the function. Since we are not naming/declaring the function in the expression, it is called an anonymous function.. a function that does not have a name.

example: this is a regular function with the name of the function declared:

function greet() {
    console.log("Hello");
};

example: this is a function expression with an anonymous function written in it.

const f = function () {
    console.log("Hello");
};

These both will print the same results.


Researched answer: Anonymous functions is creating an in-line function.. keep in mind, that since we are assigning the function to a variable.. the function gets overwritten if we reassign the value of the variable. 

4. What is the difference between state values and props in React?

Your answer:  Everything in react is a component, and state is used to store data and determines how the component renders and behaves.  There are two types of components, components that hold state and components that do not.. if they hold state then they are referred to as logic components because they run logic in state.  If they do not hold state then they are referred to as a display component. the states can be used to update things such as counters on a webpage, or a users onclicks to register the number of clicks.

unlike state that tracks and updates data it interacts with, props/properties passes on data from one component into a nested component.. a component inside of itself. (parent-child)  For example, we may have a component that greets user with "Hello 'nameOfperson'", we can leave the component as is.. but update 'nameOfperson' by passing in props from the main component with a method {props.name} in the greeter component, where 'name' is defined and given a value of "Steve" in the main App.js in the attribute of the component call.. but passed onto the greeter component tying in the name to be greeted within the syntax of the h3 tags. 

Researched answer: objects/components of a webpage has values that often need to change, so state is used to dynamically make those changes as user inputs and other conditions changes. To change the value of a state value we use a method called useState(). It allows us to create the variable with set initial parameters/values.. and use the method useState() to update those values of the components. These special methods such as useState() are called "React Hooks", allowing developers to 'hook' into using and reusing features in React. To create a state you first name the variable you want to assign a state, next we name the method we will call that state on, we typically use the same name that signifies intent but we add "set" in the beginning as a naming convention and set the state value inside the parenthese of "useState(). doing so sets the component up to have data that can be modified and called upon as needed.

5. What is the DOM?

Your answer: I couldn't answer it before so I had to research it. 

Researched answer: Document Object Model, is a programming interface that views the content of XML or HTML document as a tree structure. its like a visual representation breaking down each element into branches of the tree.. each node is an element. so the tree structure is almost like breaking things down logically/visually of the entire website/webpage.  Usually DOMs access information from the tree.. to represent it.. but it can get heavy and inefficient to store all those and access those values and render each time. Which is why there was the advent of React and the Virtual DOM. 

A virtual DOM doesn't get rendered or changed in real-time.. it just contains the 'blue-print' kept in memory that can be accessed by the DOM when needed.  Essentially we are building components and store them and have the real DOM access them when needed.. making things more efficient.. especially in its interaction with the browser.

6. STRETCH: Which is the difference between a div and a span?

Your answer: Divs and Span are containers.. or a method to contain or group things together.. such as a list or images.. etc.  The difference between span and div is that div is a block element that takes the entire width of the block.. whereas Span contains only it's content. 

Researched answer:  When wanting windows for advertising.. or a container showcase paragraphs.. its good to use Divs.. but if there is a specific piece of text that needs to be styled.. using span would work out better. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
    is a programming concept style related to concepts of "Inheritance, Abstraction, Encapsulation, and Polymorphism". Binding like-classes/kinds to individual objects in specific kinds of ways. 

2. Ruby:
    a object oriented scripting programming language. created in 1993.. popularized with ruby on RAILS. 
    
3. Implicit return:

4. Ruby blocks:

5. Ruby hashes:
