import diagnosisData from '../../data/diagnoses.json';

import { Diagnosis } from '../types';

const diagnoses: Array<Diagnosis> = diagnosisData;

const getDiagnoses = () => {
  return diagnoses;
};

export default {
  getDiagnoses
};