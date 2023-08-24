import { Vehicle } from "../Types/Vehicles";
import { vicToolKits } from "../Types/Tool";
import { Grid } from "../Types/Map";
const readline = require("readline");

export function setDefaultRover(map: Grid): Vehicle {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let rover: Vehicle = {
    name: "rover1",
    oritentation: "N",
    position: [0, 0],
    vicType: "Rover",
    tools: vicToolKits[0].Tools,
  };
  rl.question("Please enter default rover postion: ", (answer: string) => {
    //validate that the input is valid, has the necessary , and is in bounds
    rl.close;
    if (answer && answer.includes(",")) {
      try {
        rover.position[0] = parseInt(answer.split(",")[0]);
        rover.position[1] = parseInt(answer.split(",")[1]);
      } catch {
        console.log(
          "Invalid input, please ensure the input is entered in the format: x,y"
        );
        rover.position[0], (rover.position[1] = 0);
      }
      if (
        rover.position[0] < 0 ||
        rover.position[1] < 0 ||
        rover.position[0] > map.XMax ||
        rover.position[1] > map.YMax
      ) {
        rover.position[0], (rover.position[1] = 0);
      }
    } else {
      console.log(
        "Please ensure you have entered the correct input, it should be in the format: x,y"
      );
    }
  });
  return rover;
}
