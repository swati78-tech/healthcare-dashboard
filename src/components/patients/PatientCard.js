export const PatientCard = ({name, gender, age, active, image}) => {
    return (
       <div className={`patient-card ${active ? "active" : ""}`}>
      <div className="patient-image"><img src={image} width="50" height="50" alt="profile-img"/></div>

      <div className="patient-info">
        <h4>{name}</h4>
        <p>
          {gender}, {age}
        </p>
      </div>
    </div>
    )
}