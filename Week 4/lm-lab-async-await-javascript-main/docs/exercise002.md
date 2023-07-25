# Exercise 2 - More `async/await` practice

## Task 1 - Convert fetchData into async/await

In `exercise002.js` you will find a function called `fetchData()` that takes an API endpoint and returns some data converted into JSON.

Your task is to convert this function so that instead of using `.then()` and `.catch()` it uses the more modern `async`/`await` keywords and `try{} catch{}` syntax.

Have a go, if you get stuck reach out to one of the coaches for guidance. 💜

Remember to commit your code to GitHub when you're happy with your solution! 😊 🙌

## Extension - Try calling other APIs

You'll notice that the URL for the `fetch` request is stored in the `jsonTypicode` variable.

But we can pass any URL into `fetch`. Of course, not all URLs will return a JSON object (calling a webpage will return HTML, for example!).

There is a public list of free APIs for programmers at [API Fun](https://apilist.fun/)

👉 Choose an API, explore the documentation, and try calling some of the endpoints (choose `GET` endpoints rather than `POST` for simplicity at first).

👉 Use the debugger, or even `console.log` to inspect what gets returned at each stage of the `fetch`:

```JavaScript
const fetchData = (apiEndPoint) => {
	// this will be in an `await` style after Task 1 😉
  	fetch(apiEndPoint)
    	.then((response) => { console.log(response); response.json(); })
    	.then((json) => console.log(json))
    	.catch((error) => console.log(error));
};
```

👉 This is a very common pattern in frontend development - getting the `response` and calling `response.json()` to get the underlying JSON data.

🥳 Finished? Great! Time for some bubble tea, mmm! 🧋
