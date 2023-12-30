import React from "react";
import "../Pages/Portal.css";
import patientImg from "../Images/patient.png";
import doctorImg from "../Images/doctor.png";
import { NavLink } from "react-router-dom";
function Portal() {
    return (
        <div className="portal-container">
            <div className="portal-grid-container">
                <button className="portal-grid-item">
                    <NavLink to='/doctor' className="portal-item">
                    <img src={doctorImg} width={"60%"} />
                    <h4 className="portal-h4">Doctor</h4>
                    </NavLink>
                </button>
                <button className="portal-grid-item">
                <NavLink to='/login' className="portal-item">
                    <img src={patientImg} width={"60%"} />
                    <h4 className="portal-h4">Patient</h4>
                    </NavLink>
                </button>
            </div>
        </div>
    );
}

export default Portal;
