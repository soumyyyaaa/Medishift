import React  from "react";
import "./dmp.css";
import img1 from "../../Images/dmp1.png";
import { useState } from "react";
import Switch from 'react-switch';
const DoctorMain = () => {
    const [isBusy, setIsBusy] = useState(false);

    const handleToggle = () => {
      setIsBusy((prevIsBusy) => !prevIsBusy);
    };
  const tableData = [
    { time: "10:00 AM", patientName: "John Doe" },
    { time: "10:30 AM", patientName: "Alice Smith" },
    { time: "02:45 PM", patientName: "Bob Johnson" },
    { time: "03:30 PM", patientName: "Eva Davis" },
  ];
  const surgeryData = [
    { time: "09:00 AM", patientName: "Jane Smith", estimatedTime: "2 hours" },
    {
      time: "11:30 AM",
      patientName: "Michael Johnson",
      estimatedTime: "3 hours",
    },
  ];

  return (
    <>
      <div className="dmp_mainContainer">
        <div className="dmp_nameContainer">
          <div className="dmp_name">Dr Vinod Raina</div>
          <div className="dmp_Imgdiv">
            <img src={img1} alt="" className="dmp_img" />
          </div>
        </div>
        <div className="dmp_dataContainer">
          <div className="dmp_fataC1">
            <h2>Patient Schedule</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Patient Name</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.time}</td>
                    <td>{entry.patientName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dmp_fataC2">
            <h2>Surgery Timings</h2>
            <table className="surgery-timings-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Patient Name</th>
                  <th>Estimated Time</th>
                </tr>
              </thead>
              <tbody>
                {surgeryData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.time}</td>
                    <td>{entry.patientName}</td>
                    <td>{entry.estimatedTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dmp_fataC3">
          <div className={`toggle-container ${isBusy ? 'busy' : 'free'}`}>
      <h2>{isBusy ? "I'm Free to Take More Patients" : "I'm Busy, can't have More Patients"}</h2>
      <Switch
        onChange={handleToggle}
        checked={isBusy}
        onColor="#51E75D" 
        offColor="#f08080" 
      />
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorMain;
