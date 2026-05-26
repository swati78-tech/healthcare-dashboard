import react,{useState, useEffect} from 'react';
import { PatientCard } from './PatientCard';

export const PatientList = ({allPatients}) => {

    const patients = allPatients || [];

    return (
        <div className='patient-list'>
           {patients.map((patient) => (
            <PatientCard
                key={patient.id}
                name={patient.name}
                gender={patient.gender}
                age={patient.age}
                active={patient.name==="Jessica Taylor" ? true : false}
                image={patient.profile_picture}
            />
           ))}
        </div>
    )
}