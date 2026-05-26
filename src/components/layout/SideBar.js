import { PatientList } from '../patients/PatientList';

export const SideBar = ({allPatients}) => {
    return <div className='sidebar'>
        <div className='sidebar-title'>
            <div>Patients</div>
            <div>icon</div>
        </div>
        <div><PatientList allPatients={allPatients}/></div>
    </div>
}