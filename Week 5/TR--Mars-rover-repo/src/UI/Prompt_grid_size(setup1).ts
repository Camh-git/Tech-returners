const readline = require("readline");

export function setGridSize(): Array<number> {
  let xy = [0, 0];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "Please enter a map size in the format x,y: ",
    (answer: string) => {
      rl.close();
      //validate that the input is valid, has the necessary , and is > 0
      if (answer && answer.includes(",")) {
        try {
          xy[0] = parseInt(answer.split(",")[0]);
          xy[1] = parseInt(answer.split(",")[1]);
        } catch {
          console.log(
            "Invalid input, please ensure the input is entered in the format: x,y"
          );
          return [0, 0];
        }
        if (xy[0] < 0 || xy[1] < 0) {
        } else {
          console.log("Please make sure both the values are greater than 0");
          return [0, 0];
        }
      } else {
        console.log(
          "Please ensure you have entered the correct input, it should be in the format: x,y"
        );
      }
    }
  );

  return xy;
}
