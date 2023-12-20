import React from "react";
import homeImg from "../Images/home-img.jpg";

import "../Pages/Home.css";

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-h1">
                Welcome to MediShift - Your Trusted Doctor Availability Platform
            </h1>
            <h3 className="home-h3">
                Connecting Patients with Care, Anytime, Anywhere
            </h3>
            <div className="home-grid-container1">
                <img src={homeImg} width={"100%"} />
                <p>
                    Welcome to MediShift, where we make healthcare accessible
                    and convenient for you. Our platform bridges the gap between
                    patients and healthcare providers, ensuring you have the
                    information you need to make informed decisions about your
                    healthcare. <h5 className="home-h5">For Patients:</h5>
                    Explore and Connect with Your Ideal Doctor
                    <ul>
                        <li className="list-cont">
                            <strong style={{ color: "#1c6dd0" }}>
                                Details:{" "}
                            </strong>
                            Get detailed information about each doctor,
                            including their contact number, schedule,
                            availability
                        </li>
                        <li className="list-cont">
                            <strong style={{ color: "#1c6dd0" }}>
                                Availability:{" "}
                            </strong>
                            View real-time updates on doctor schedules and
                            availability
                        </li>
                    </ul>
                    <h5 className="home-h5">For Doctors:</h5>
                    Manage Your Schedule with Ease
                    <ul>
                        <li className="list-cont">
                            <strong style={{ color: "#1c6dd0" }}>
                                Schedule Updates:{" "}
                            </strong>
                            Update your availability in real-time, ensuring that
                            patients always have access to the latest
                            information
                        </li>
                        <li className="list-cont">
                            <strong style={{ color: "#1c6dd0" }}>
                                Status Updates:{" "}
                            </strong>
                            Keep your patients informed about your current
                            status
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Home;
