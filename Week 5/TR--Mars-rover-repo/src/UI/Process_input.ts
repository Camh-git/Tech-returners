export function processInput(input: string) {
  //Validate input
  //call the appropriate command based on the input
  if (input) {
    input = input.toUpperCase();
  } else {
    console.log("Please enter a valid command");
  }
}
