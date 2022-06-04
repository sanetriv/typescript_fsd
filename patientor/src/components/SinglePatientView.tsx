import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { updatePatient, useStateValue } from "../state";
import { Entry, Patient } from "../types";
import EntryDetails from "./EntryDetails";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const SinglePatientView = () => {

  const [{ patients }, dispatch] = useStateValue();

  const { id } = useParams<{ id: string }>();
  
  React.useEffect(() => {

    const fetchPatient = async (id: string) => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(updatePatient(patientFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    if(!patients[id as string].ssn){
      void fetchPatient(id as string);
    }
  }, [dispatch]);
  
  const patient: Patient = patients[id as string];
  
  return(
    <div>
      <b><h2>{patient.name} {patient.gender==='male' ? <MaleIcon /> : <FemaleIcon />}</h2></b>
      ssn: {patient.ssn}<br></br>
      occupation: {patient.occupation}
      <b><h3>entries</h3></b>
      {patient.entries?.map((entry: Entry) => (
        <div key={entry.id}>
          {/* {entry.date} <i>{entry.description}</i><br></br> */}
            {/* {entry.diagnosisCodes?.map((diagnosis: string) => (
              <li key={diagnosis}>{diagnosis} {diagnoses[diagnosis].name}</li>
            ))} */
            <EntryDetails entry={entry}/>
            }
        </div>
      ))}
    </div>
  );
};

export default SinglePatientView;