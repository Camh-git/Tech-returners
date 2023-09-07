import {
  ballResult,
  parseBallResult,
  ballResultToInt,
} from "./types/ballResult";

export type frameScore = [ballResult, ballResult];

export function playBall(remainingPins: number, overRide: number): number {
  //returns a random number less than the remaining pins unless overridden(passing any value over 10 will ignore the override as it is invalid)
  if (overRide <= 10) {
    return overRide;
  }
  return Math.floor(Math.random() * (remainingPins + 1));
}
//TODO: change it so that rather than having a seperate ball override var we just pass parts of a frameoverride(1 less type to deal with)
export interface playFrameTestingOverRide {
  //Allows you to overwrite the random numbers so that playFrame can be tested
  scores?: Array<number>;
}

export function playFrame(
  frameOverRide: playFrameTestingOverRide,
  ballOverRide: number
): frameScore {
  //setup the  frame and run the first round
  let pinsRemaining = 10 - playBall(10, ballOverRide);
  if (frameOverRide.scores) {
    //using the testing override
    pinsRemaining = 10 - frameOverRide.scores[0];
  }
  let frameResult: frameScore = [parseBallResult(10 - pinsRemaining), 0];

  //play a second ball if you didn't get a strike
  if (pinsRemaining > 0) {
    if (frameOverRide.scores) {
      //using the testing override
      pinsRemaining -= frameOverRide.scores[1];
    } else {
      pinsRemaining -= playBall(pinsRemaining, ballOverRide);
    }

    //check for spare
    if (typeof frameResult[0] === "number") {
      //The if is just to make sure that TS knows frameResult[0] is a number when we try to do math with it
      if (pinsRemaining === 0) {
        frameResult[1] = "spare";
      } else {
        frameResult[1] = parseBallResult(10 - frameResult[0] - pinsRemaining);
      }
    }
  }

  //If the total of the 2 balls is greater than 10 return 0(this can't happen in production since playball is limited to the number of remaining pins)
  if (
    typeof frameResult[0] === "number" &&
    typeof frameResult[1] === "number" &&
    frameResult[0] + frameResult[1] > 10
  ) {
    (frameResult[0] = 0), (frameResult[1] = 0); //This should be [0],[1]=0 but the linter keeps breaking it
  }
  return frameResult;
}

export function calculateScore(
  frames: Array<frameScore>,
  ballOverRide: Array<number>
): number {
  let score: number = 0;
  let index = 0;
  if (frames.length !== 10) {
    return 0;
  }
  frames.forEach((entry) => {
    if (entry[0] === "strike") {
      //check if player gets the extra ball for a last frame strike
      if (index >= 9) {
        score += 10; //For the inital strike
        //Play the first bonus ball
        let bonusScore: number = playBall(10, 99);
        if (ballOverRide[0] <= 10) {
          bonusScore = ballOverRide[0];
        }

        //Play the second bonus ball
        if (ballOverRide[1] && ballOverRide[1] <= 10) {
          bonusScore += ballOverRide[1];
        } else {
          bonusScore += playBall(10, 99);
        }
        score += bonusScore * 2; // since we get the score for knocking over the pins and the same number as a strike bonus (if your not supposed to count this twice let me know, it should be as simple to fix as removing the 2* and adjusting the tests)
      } else {
        //Award this round's points, and the bonus
        score +=
          10 +
          ballResultToInt(frames[index + 1][0]) +
          ballResultToInt(frames[index + 1][1]);
      }
    } else if (entry[1] === "spare") {
      if (index >= 9) {
        //For a final round spare we have already used 2 balls and so only have our 1 bonus shot left
        score += 10 + playBall(10, ballOverRide[0]);
      } else {
        //Award this round's points, and next ball's
        score += 10 + ballResultToInt(frames[index + 1][0]);
      }
    } else if (typeof entry[0] === "number" && typeof entry[1] === "number") {
      //Add the value of a frame with no spares or strikes
      score += entry[0] + entry[1];
    } else {
      //one of the passed frames was invalid
      return 0;
    }
    index++;
  });
  return score;
}
//Running the game
const NO_FRAME_OVERRIDE: playFrameTestingOverRide = { scores: [] };
const NO_BALL_OVERRIDE: number = 99; //not strictly necesary, but nice for readability/understanding
autoPlay();
export function autoPlay() {
  let frames: Array<frameScore> = [];

  for (let i = 0; i < 10; i++) {
    frames.push(playFrame(NO_FRAME_OVERRIDE, NO_BALL_OVERRIDE));
  }
  //console.log(`Game over, score: ${calculateScore(frames)}`);
}
