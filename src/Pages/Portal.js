import React from "react";
import "../Pages/Portal.css";
import patientImg from "../Images/patient.png";
import doctorImg from "../Images/doctor.png";

function Portal() {
    return (
        <div className="portal-container">
            <div className="portal-grid-container">
                <button className="portal-grid-item">
                    <img src={doctorImg} width={"60%"} />
                    <h4 className="portal-h4">Doctor</h4>
                </button>
                <button className="portal-grid-item">
                    <img src={patientImg} width={"60%"} />
                    <h4 className="portal-h4">Patient</h4>
                </button>
            </div>
        </div>
    );
}

export default Portal;
