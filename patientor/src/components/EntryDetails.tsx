import React from "react";
import { Entry } from "../types";
import HealthCheckEntry from "./HealthCheckEntry";
import HospitalEntry from "./HospitalEntry";
import OccupationalHealthcareEntry from "./OccupationalHealthcareEntry";

const EntryDetails = ({ entry }) => {
    switch(entry.type) {
    case 'Hospital':
        return <HospitalEntry />;    
    case 'OccupationalHealthcare':
        return <OccupationalHealthcareEntry />;
    case 'HealthCheck':
        return <HealthCheckEntry />;
    };
};

export default EntryDetails;