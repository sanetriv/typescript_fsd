import express from 'express';
import { webBmiCalculator } from './bmiCalculator';
import { exerciseCalculator } from './exerciseCalculator';
const app = express();

app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    res.json({
      weight: Number(req.query.height as string),
      height: Number(req.query.weight as string),
      bmi: webBmiCalculator(req.query.height as string, req.query.weight as string)
    });
  } catch {
    res.json({ error: 'malformatted parameters'});
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    res.json({ error: 'parameters missing' }).status(400);
  }
  if (!isNaN(Number(target)) && !daily_exercises.map(Number).includes(NaN)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.json(exerciseCalculator(daily_exercises, target));
  } else {
    res.json({ error: 'malformatted parameters' }).status(400);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});