import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { updatePatient, useStateValue } from "../state";
import { Patient } from "../types";

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
  
  const patient = patients[id as string];
  
  return(
    <div>
      <b><h2>{patient.name}</h2></b>
      gender: {patient.gender}<br></br>
      ssn: {patient.ssn}<br></br>
      occupation: {patient.occupation}
    </div>
  );
};

export default SinglePatientView;