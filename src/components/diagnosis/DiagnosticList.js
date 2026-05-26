import "./diagnosis.css"

export const DiagnosticList = ({ patientData }) => {
  const diagnosticList = patientData?.diagnostic_list || [];

  return (
    <div className="diagnosis-list">

      <h2>Diagnostic List</h2>

      <table className="diagnostic-table">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {diagnosticList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};