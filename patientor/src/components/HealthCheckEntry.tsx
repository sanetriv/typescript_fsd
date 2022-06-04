import { MedicalServices } from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react";
import { Entry } from "../types";


const HealthCheckEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
    if (entry.type==='HealthCheck'){
        switch(entry.healthCheckRating){
            case 0:
                return (
                    <div style={{border: 'thin solid black', borderRadius: '5px', padding: '4px', marginBottom: '7px'}}>
                        {entry.date} <MedicalServices /><br></br>
                        <i>{entry.description}</i><br></br>
                        <FavoriteIcon color={'success'}/><br></br>
                        diagnosed by {entry.specialist}
                    </div>
                );
            case 1:
                return (
                    <div style={{border: 'thin solid black', borderRadius: '5px', padding: '4px', marginBottom: '7px'}}>
                        {entry.date} <MedicalServices /><br></br>
                        <i>{entry.description}</i><br></br>
                        <FavoriteIcon color={'warning'}/><br></br>
                        diagnosed by {entry.specialist}
                    </div>
                );
            case 2:
                return (
                    <div style={{border: 'thin solid black', borderRadius: '5px', padding: '4px', marginBottom: '7px'}}>
                        {entry.date} <MedicalServices /><br></br>
                        <i>{entry.description}</i><br></br>
                        <FavoriteIcon color={'secondary'}/><br></br>
                        diagnosed by {entry.specialist}
                    </div>
                );
            default:
                return (
                    <div style={{border: 'thin solid black', borderRadius: '5px', padding: '4px', marginBottom: '7px'}}>
                        {entry.date} <MedicalServices /><br></br>
                        <i>{entry.description}</i><br></br>
                        <FavoriteIcon color={'error'}/><br></br>
                        diagnosed by {entry.specialist}
                    </div>
                );    
        }
          
    } else {
        return <div></div>;
    }
    
};

export default HealthCheckEntry;