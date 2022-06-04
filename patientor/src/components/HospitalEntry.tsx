import React from "react";
import { Entry } from "../types";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const HospitalEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
    if(entry.type==='Hospital') {
      return (
        <div style={{border: 'thin solid black', borderRadius: '5px', padding: '4px', marginBottom: '7px'}}>
            {entry.date} <LocalHospitalIcon /><br></br>
            <i>{entry.description}</i><br></br>
            diagnosed by {entry.specialist}<br></br>
            discharge: {entry.discharge.date} - <i>{entry.discharge.criteria}</i><br></br>
        </div>
        );  
    } else {
        return <div></div>;
    }
    
};

export default HospitalEntry;