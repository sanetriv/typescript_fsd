import React from "react";
import { Entry } from "../types";
import WorkIcon from '@mui/icons-material/Work';

const OccupationalHealthcareEntry: React.FC<{ entry: Entry }> = ({ entry })=> {
    if(entry.type==='OccupationalHealthcare'){
      return (
        <div style={{border: 'thin solid black', borderRadius: '5px', padding: '4px', marginBottom: '7px'}}>
            {entry.date} <WorkIcon /><br></br>
            <i>{entry.description}</i><br></br>
            Employer: {entry.employerName}<br></br>
            sick leave: {entry.sickLeave ? `${entry.sickLeave?.startDate} - ${entry.sickLeave?.endDate}` : 'None'}<br></br>
            diagnosed by {entry.specialist}
        </div>
    );
    } else {
        return <div></div>;
    }
};

export default OccupationalHealthcareEntry;