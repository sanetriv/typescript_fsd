import React from "react";
import { Entry } from "../types";
import HealthCheckEntry from "./HealthCheckEntry";
import HospitalEntry from "./HospitalEntry";
import OccupationalHealthcareEntry from "./OccupationalHealthcareEntry";

const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

const EntryDetails = (entry: Entry) => {
    switch(entry.type) {
    case 'Hospital':
        return <HospitalEntry entry={entry}/>   
    case 'OccupationalHealthcare':
        return <OccupationalHealthcareEntry />;
    case 'HealthCheck':
        return <HealthCheckEntry />;
    default:
        return assertNever(entry);
    };
};

export default EntryDetails;