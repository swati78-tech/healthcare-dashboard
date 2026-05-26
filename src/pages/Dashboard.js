import react,{useState, useEffect} from 'react';
import { Header } from '../components/layout/Header';
import { SideBar } from '../components/layout/SideBar';
import { DiagnosisHistory } from '../components/diagnosis/DiagnosisHistory';
import { DiagnosticList } from '../components/diagnosis/DiagnosticList';
import { PatientProfile } from '../components/patients/PatientProfile';
import { LabResults } from '../components/patients/LabResults';
import { fetchPatients } from '../services/api';

export const Dashboard = () => {
    const [allPatients, setAllPatients] = useState(null)
    const [patientsData, setPatientsData] = useState(null);

    useEffect(() => {
        const getPatientDetails = async () => {
            try {
                const data = await fetchPatients();
                setAllPatients(data);
                const Jessica = data.find((patient) => patient.name === 'Jessica Taylor');
                setPatientsData(Jessica);
            } catch(error) {
                console.log(error);
            } finally {
                isLoading(false);
            }
        };
        getPatientDetails();
    },[]);

    return <div className='dashboard'>
            <Header />
            <div className='dashboard-section'>
            <SideBar allPatients={allPatients}/>
            <div className='main-section'>
                <DiagnosisHistory patientsData={patientsData} />
                <DiagnosticList patientsData={patientsData}/>
            </div>
            <div className='right-section'>
                <PatientProfile patientsData={patientsData}/>
                <LabResults />
            </div>
            </div>
    </div>
}