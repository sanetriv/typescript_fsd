interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

 export const exerciseCalculator = (args: Array<number>, target: number): Result => {
  const avg = args.reduce((a, b) => a + b, 0) / args.length || 0;
  const success = avg >= target ? true : false;
  const rating = success ? 3 : avg / target < 0.5 ? 1 : 2;
  return {
    periodLength: args.length,
    trainingDays: args.filter(e => e!==0).length,
    success: success,
    rating: rating,
    ratingDescription: success ? 'Target reached, well done!' : rating === 2 ? 'not too bad but could be better' : 'Not even close, try harder!',
    target: target,
    average: avg
  };
};

interface Args {
  value1: Array<number>;
  value2: number;
}

const parseExerciseArguments = (args: Array<string>): Args => {
  if (args.length < 4) throw new Error('Not enough arguments');

  const argArray: Array<number> = args.slice(3).map(e=>Number(e));

  if (!isNaN(Number(args[2])) && argArray.filter(e => !isNaN(e)).length === argArray.length) {
    return {
      value1: argArray,
      value2: Number(args[2])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const { value1, value2 } = parseExerciseArguments(process.argv);
  console.log(exerciseCalculator(value1, value2));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}