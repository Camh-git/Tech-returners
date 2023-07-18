# Const vs let 🥊

Before ES6 (ES2015) there was only one way to declare variables and constants in JavaScript, which was using `var`.

Since the invention of ES6, we now have `let` and `const`

But whats the difference? 🤔

- `const` stands for constant

- `const` cannot be reassigned

- `let` let's you reassign it

To see this in action, complete the tasks in `const_vs_let.js` (outlined below)

Note: There are no tests written for this task

## Task 1:

If you `console.log(count)` and run the file using `node const_vs_let.js` you will get an error! Oh oh! ⛔️

Update const to let so our count can be updated

## Task 2:

Can you spot another problem with our code? 🕵️

Have a think...

Answer: Update the people array so that it uses `const` instead of `let`, as our people array doesn't get reassigned

## Top Tip:

A good habit to get into when you are coding, is using `const` for everything... then changing it to `let` if you realise your

variable needs to be reassigned! 👍

To run the file use:

            node const_vs_let.js
