import react, {useState, useEffect} from 'react';
import { BloodPressureChart } from './BloodPressureChart';
import "./diagnosis.css"

export const DiagnosisHistory = ({patientsData}) => {

    const diagnosisHistory = patientsData?.diagnosis_history || [];

    const latestDiagnosis = diagnosisHistory[0];

    if(patientsData) {
    return <div className='dashboard-card diagnosis-history'>
        <div className='diagnosis-header'>
            <h2>Diagnosis History</h2>
        </div>
        
<div className="chart-header">

  <h3>Blood Pressure</h3>

  <div className="chart-dropdown">
    Last 6 months ⌄
  </div>

</div>

<div className="chart-body">

  <div className="chart-left">
    <BloodPressureChart diagnosisHistory={diagnosisHistory} />
  </div>

  <div className="chart-right">

    <div className="bp-item">
      <span className="dot pink"></span>
      <p>Systolic</p>
      <h2>{latestDiagnosis?.blood_pressure?.systolic?.value}</h2>
      <span className="status up">
        {latestDiagnosis?.blood_pressure?.systolic?.levels}
      </span>
    </div>

    <div className="divider"></div>

    <div className="bp-item">
      <span className="dot purple"></span>
      <p>Diastolic</p>
      <h2>{latestDiagnosis?.blood_pressure?.diastolic?.value}</h2>
      <span className="status down">
        {latestDiagnosis?.blood_pressure?.diastolic?.levels}
      </span>
    </div>

  </div>

</div>

      {/* <BloodPressureChart  diagnosisHistory={diagnosisHistory}/> */}
        <div className='vital-cards'>
            <div className='vital-card respiratory'>
                <h3>Respiratory Rate</h3>
                <h1>{latestDiagnosis?.respiratory_rate?.value} bpm</h1>
                <p>{latestDiagnosis?.respiratory_rate?.levels}</p>
            </div>
            <div className='vital-card temperature'>
                <h3>Temparature</h3>
                <h1>{latestDiagnosis?.temperature?.value} °F</h1>
                <p>{latestDiagnosis?.temperature?.levels}</p>
            </div>
             <div className='vital-card heart'>
                <h3>Heart Rate</h3>
                <h1>{latestDiagnosis?.heart_rate?.value} bpm</h1>
                <p>{latestDiagnosis?.heart_rate?.levels}</p>
            </div> 
        </div> 
    </div>
    }
    return <div className='diagnosis-history'>loading...</div>
}