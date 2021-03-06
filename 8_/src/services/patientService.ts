import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { Patient, NonSensitivePatient, NewPatient, Entry } from '../types';

const patients: Patient[] = patientData as Patient[];

const getPatients = () : Patient[] => {
  return patients;
};

const getPatient = (id: string) : Patient | undefined => {
  const pat = patients.find(patient => patient.id===id);
  return pat;
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

const newEntry = (entry : Entry, id: string): Entry => {
  const patient = patientData.find(patient => patient.id===id);
  patient?.entries.push(entry);
  return entry;
};

export default {
  getPatients,
  getNonSensitivePatients,
  newPatient,
  getPatient,
  newEntry
};