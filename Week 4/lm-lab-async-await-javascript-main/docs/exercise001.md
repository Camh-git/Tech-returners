# Exercise 1

## Task 1 - Calling a Promise and printing the response to the console

In `exercise001.js` you will find a simple function that returns a Promise.

💡 Remember, a successful Promise calls `resolve` and a failed Promise calls `reject`.

This Promise is simulating a task that fails 50% of the time, as if it's a network request being made on a very dodgy network.

## Consuming the Promise

Most of what we do with Promises isn't _writing_ them ourselves, so we rarely have to create a function like this, which creates a Promise object and either resolves or rejects. Most of the time we'll be _consuming_ Promises - i.e. using libraries that return Promises to us. A common example of this is `fetch`, the API for making HTTP requests.

So let's practice consuming this mock Promise.

👉 Building on what you learnt in "JavaScript Promises & Asynchronous Programming", call the pre-written promise in `exercise001.js` using
`.then()` and `.catch()`

👉 If the promise is successful, write `Yay! Promise resolved with response: ` to the console. Use string interpolation to add the actual response at the end.

👉 If the promise fails, write `Boo. Promise rejected with response: ` to the console. Use string interpolation to add the actual response at the end.

👉 If your code works you should get console messages that say `Yay! Promise resolved with response: done` when the promise is successful and `Boo. Promise rejected with response: error` when the promise fails. Since the Promise is random you'll have to run it a few times to check you get both responses.

👉 Commit and push your code to GitHub when you've got it working, or alternatively reach out to the coaches if you get stuck or have a quesstion! 😊 🙌

## Task 2 - Convert your .then().catch() into Async & Await 💅

Great, so you're chaining `.then()` and `.catch()` onto your promise object. This allows you to handle success or failure differently - an important concept in asynchronous code.

This style of using `.then()` and `.catch()` is ok for something short and sweet, but if we have to call multiple promises this can result in something called "Promise-Callback Hell" - a confusing heap of deeply nested Promises.

👉 Task 2 is to convert your `.then()` and `.catch()` promise calls into a more modern Async / Await style. Update your `.then()` and `.catch()` to instead use `async`, `await` and `try{}` and `catch{}`. The output should still be the same.

❗ GO TRY IT NOW, OR READ FURTHER FOR A HINT IF YOU MUST.

❗ SERIOUSLY, IT'S GOOD TO TRY IT YOURSELF FIRST EVEN IF YOU'RE NOT SURE...

💡 Hint 1: To convert a function to async, we have to mark the function itself as `async`.

So you'll need a function to call:

```JavaScript
const getPromiseResponse = async () => {
 	/*  your function here */
}
getPromiseResponse();
```

💡 Hint 2: Once a function is marked async, we can use the `await` keyword before a promise. (This can happen multiple times in an async function.) For example:

```JavaScript
   /* inside async function */
   const result = await somePromiseObject; // more commonly this might be a functionThatReturnsAPromise();
```

Hopefully that's enough to get you started if you're really stuck.

Have a go, and do ask one of the coaches for guidance if you like! 😊

## Wait...! What about "top level await?"

You may have heard that it's now possible to use "top level await" - i.e. to use the `await` keyword without wrapping the code in an `async` function (like `getPromiseResponse` in our example above).

This is a feature added to JavaScript in `ES2022`. It is fairly widely supported today so you can start using it. However, it's important to understand the pattern of wrapping code that `await`s in an `async` function as you'll see it a lot!

## Time to move on...

Commit and push your code to GitHub when you've got it working and move onto [exercise002](./exercise002.md)! 😊 🙌
