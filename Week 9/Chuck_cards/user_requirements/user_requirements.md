# Chuck Norris Requirements 📝

No pressure, but Chuck Norris needs a new website building in React. 😅

The following document is a list of User Requirements for the site. 

If the website isn't up to scratch, Chuck Norris *will* round house kick you in the face. 

His requirements are as follow:

## Requirement 1 - Chuck Card 🥋

- In `chuck_card.tsx` the `<h2>` must display Chucks greeting (which is included in useState in `App.tsx`). To display Chucks greeting pass it down to `<ChuckCard />` through props. 

💡 Don't forget to add what type `greeting` is to your ChuckCardProps interface

💡 Note: the ChuckCard parameters have helpfully included two curly braces for destructuring {} your greeting. Have a play around and see what happens if you don't add these curly braces. How would you access the property without destructuring?

This article, point number [3. React props can be accessed as an object or destructured](https://rqhxdq-com.ngontinh24.com/article/react-props-cheatsheet-10-patterns-you-should-know#toc-3) shows you how! 

- In `chuck_card.tsx` the `<img/>` element must display a picture of Chuck. Replace the string "Chuck image here!" with the ChuckImage object (no quote marks required).

## Requirement 2 - Chuck Info ℹ️

- The page must display some information about Chuck. In `chuck_info.tsx` use props to display how many whales Chuck has saved and how many round house kicks he has done.

## Requirement 3 - Chuck Jokes 🃏

- The page must display some jokes about Chuck. These jokes can be found in one of the useState declarations. Using what you know about JavaScript, `.map()` over jokes and return the `<ChuckJokes />` component underneath the heading "Jokes: ".

- Pass the joke down to `<ChuckJokes />` using props 

💡 Hint: consider what type this should be, refer to `joke.ts`

## Requirement 4 - No one warns Chuck Norris, Chuck Norris warns the browser!

- The browser console must *not* contain warnings, especially ones like this one:

"Warning: Each child in a list should have a unique 'key' prop."

- Using the joke `id` and the React documentation around [Rendering Lists](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key) make the warning disappear


## Extension 🔥

- Underneath Jokes, create a heading with the text "Filtered Jokes: "

- Create a variable called `const filteredJokes` and assign some logic to it that filters jokes based on whether they have an id of 3. 

- Beneath the heading "Filtered Jokes: " map over filtered jokes. Only the joke with the id of 3 should appear. 


## The End 🙌

Take a deep sigh of relief. You've survived Chuck...

This time.
