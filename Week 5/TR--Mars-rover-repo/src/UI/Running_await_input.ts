const readline = require("readline");
import {} from "../index";
import { proccessInput } from "../index";

export function awaitInput() {
  const commandIn = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  commandIn.question("Please enter a command:", (answer: string) => {
    commandIn.close();
    proccessInput(answer);
  });
}
