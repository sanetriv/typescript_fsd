import patientData from '../../data/patients.json';
import { v1 as uuid } from 'uuid';

import { Patient, NonSensitivePatient, NewPatient } from '../types';


const getPatients = () : Patient[] => {
  return patientData;
};

const getNonSensitivePatients = () : NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const newPatient = (patient : NewPatient): Patient => {
  const newPatientEntry = {
    id: uuid(),
    ...patient
  };
  patientData.push(newPatientEntry);
  return newPatientEntry;
}; 

export default {
  getPatients,
  getNonSensitivePatients,
  newPatient
};