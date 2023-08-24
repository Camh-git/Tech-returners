import { Grid, CoOrdinate } from "../Types/Map";
import { Vehicle } from "../Types/Vehicles";
const readline = require("readline");

export function setForbiddenTiles(map: Grid, rover: Vehicle) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let blockedTiles: Array<CoOrdinate> = [];
  rl.question(
    "Please enter any forbidden grid squares in the format x,y with each entry seperated by a colon(:) : ",
    (answer: string) => {
      rl.close();
      if (answer) {
        //check if there is more than 1 tile
        if (answer.includes(",") && answer.includes(":")) {
          try {
            answer.split(":").forEach((entry: string) => {
              blockedTiles.push([
                parseInt(entry.split(",")[0]),
                parseInt(entry.split(",")[1]),
              ]);
            });
          } catch {
            console.log(
              "Failed to add multiple forbidden squares, please restart and ensure the input format is: x,y with a : seperating each set of co-ordinates "
            );
            blockedTiles = [];
          }
        } //If there is only 1 tile add it
        else if (answer.includes(",")) {
          try {
            blockedTiles.push([
              parseInt(answer.split(",")[0]),
              parseInt(answer.split(",")[1]),
            ]);
          } catch {
            console.log(
              "Failed to add forbidden square, please restart and ensure the input format is: x,y with a : seperating any addtional sets of co-ordinates "
            );
          }
        } else {
          console.log(
            "Please ensure you have entered the correct input, it should be in the format: x,y with a : seperating each set of co-ordinates"
          );
        }
      } //The lack of input will be taken as the user not wanting any forbidden blocks
    }
  );
}
