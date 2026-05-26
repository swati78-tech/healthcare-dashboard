
import "./profile.css";

export const PatientProfile = ({ patientsData }) => {
  return (
    <div className="dashboard-card profile-card">

      <div className="profile-header">
        <div className="profile-image">
      <img src={patientsData?.profile_picture} alt="profile" />
      </div>
        <h2>{patientsData?.name}</h2>
      </div>

      <div className="profile-info">

        <div className="info-row">
          <span>Date Of Birth</span>
          <p>{new Date(patientsData?.date_of_birth).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}</p>
        </div>

        <div className="info-row">
          <span>Gender</span>
          <p>{patientsData?.gender}</p>
        </div>

        <div className="info-row">
          <span>Contact</span>
          <p>{patientsData?.phone_number}</p>
        </div>

        <div className="info-row">
          <span>Emergency</span>
          <p>{patientsData?.emergency_contact}</p>
        </div>

        <div className="info-row">
          <span>Insurance</span>
          <p>{patientsData?.insurance_type}</p>
        </div>

      </div>

      <button className="profile-btn">
        Show All Information
      </button>

    </div>
  );
};