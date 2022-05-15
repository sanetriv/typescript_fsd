const calculateBmi = (h: number, w: number): string => {
  const meters = h / 100;
  const bmi = w / (meters*meters);
  if (bmi<=18.4) {
    return 'Underweight';
  } else if (bmi>=25) {
    return 'Overweight';
  } else {
    return 'Normal (healthy weight)';
  }
};

interface Arguments {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): Arguments => {
  if (args.length < 2) throw new Error('Not enough arguments');
  if (args.length > 2) throw new Error('Too many arguments');

  if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
    return {
      value1: Number(args[0]),
      value2: Number(args[1])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

/*try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateBmi(value1, value2));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}*/

export const webBmiCalculator = (h: string, w: string): string => {
  const args: Array<string> = [h, w];
  const { value1, value2 }: Arguments = parseArguments(args);
  return calculateBmi(value1, value2);
};