# Imperative vs Declarative Programming

💬 “Declarative Programming's... main goal is to describe the desired result without direct dictation on how to get it.” - GeeksforGeeks

As the JavaScript language has developed, it has moved away from imperative methods, abstracting complexity away "under the hood". 🚙

Modern JavaScript is a lot more _declarative_.

An example of an imperative programming method would be a `for` loop:

```JavaScript

// Here we are using a for loop to explain step by step, *exactly* what our program should do

const people = ["Barry", "Gary", "Larry"];

for(let i = 0; i < people.length; i++) {
    console.log(people[i])
}

```

If we refactored the `for` loop above into something more _declarative_, it would look something like this:

```JavaScript

// We are using forEach
// We don't care about the individual steps needed (let i = 0; i < people.length etc) to get what we want - these details are hidden away
// forEach is more human friendly, it *sounds* more like what we want to do...

const people = ["Barry", "Gary", "Larry"]

people.forEach((person) => console.log(person))

```

Remembering that declarative programming means "abstracting away complexity", consider how you would refactor the function `longPasswords()` so it uses _declarative_ methods to get the same result.

To run the tests:

            npm test imperative_vs_declarative.test.js

💡 Hint: make sure you're in the correct folder before running this command! 😉

_Note: there is a place for both imperative and declarative styles of programming. However, declarative programming is often favoured for being more readable._
