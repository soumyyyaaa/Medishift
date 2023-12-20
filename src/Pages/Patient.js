import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../Pages/Patient.css";

const expandOnClick = (qId) => {
    const qClass = [".a0", ".a1", ".a2", ".a3", ".a4", ".a5", ".a6"];
    let question = qClass[qId];
    const answer = document.querySelector(question);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
};

function Patient() {
    return (
        <div className="patient-container">
            <div>
                <button
                    className="doctor-name"
                    onClick={() => expandOnClick(0)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "1%" }}
                    />
                    <span>Dr. Vinod Raina</span>
                </button>
                <p className="doctor-detail a0">
                    <table>
                        <tr>
                            <th>Category</th>
                            <td>Oncologist</td>
                        </tr>
                        <tr>
                            <th>Contact No.</th>
                            <td>9698521000</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th>Cabin No.</th>
                            <td>101</td>
                        </tr>
                    </table>
                </p>
            </div>
            <div>
                <button
                    className="doctor-name"
                    onClick={() => expandOnClick(1)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "1%" }}
                    />
                    <span>Dr. YK Mishra</span>
                </button>
                <p className="doctor-detail a1">
                    <table>
                        <tr>
                            <th>Category</th>
                            <td>Cardiologist</td>
                        </tr>
                        <tr>
                            <th>Contact No.</th>
                            <td>9690521000</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Cabin No.</th>
                            <td>102</td>
                        </tr>
                    </table>
                </p>
            </div>
            <div>
                <button
                    className="doctor-name"
                    onClick={() => expandOnClick(2)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "1%" }}
                    />
                    <span>Dr. Aditya Gupta</span>
                </button>
                <p className="doctor-detail a2">
                    <table>
                        <tr>
                            <th>Category</th>
                            <td>Neurosurgeon</td>
                        </tr>
                        <tr>
                            <th>Contact No.</th>
                            <td>9698521000</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th>Cabin No.</th>
                            <td>103</td>
                        </tr>
                    </table>
                </p>
            </div>
            <div>
                <button
                    className="doctor-name"
                    onClick={() => expandOnClick(3)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "1%" }}
                    />
                    <span>Dr. Abhijeet Dey</span>
                </button>
                <p className="doctor-detail a3">
                    <table>
                        <tr>
                            <th>Category</th>
                            <td>Orthopaedist</td>
                        </tr>
                        <tr>
                            <th>Contact No.</th>
                            <td>9698521000</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Cabin No.</th>
                            <td>104</td>
                        </tr>
                    </table>
                </p>
            </div>
            <div>
                <button
                    className="doctor-name"
                    onClick={() => expandOnClick(4)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "1%" }}
                    />
                    <span>Dr. Naresh Singh</span>
                </button>
                <p className="doctor-detail a4">
                    <table>
                        <tr>
                            <th>Category</th>
                            <td>Audiologist</td>
                        </tr>
                        <tr>
                            <th>Contact No.</th>
                            <td>9698521000</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th>Cabin No.</th>
                            <td>105</td>
                        </tr>
                    </table>
                </p>
            </div>
            <div>
                <button
                    className="doctor-name"
                    onClick={() => expandOnClick(5)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "1%" }}
                    />
                    <span>Dr. Darshna Rathi</span>
                </button>
                <p className="doctor-detail a5">
                    <table>
                        <tr>
                            <th>Category</th>
                            <td>Dentist</td>
                        </tr>
                        <tr>
                            <th>Contact No.</th>
                            <td>9698521000</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Cabin No.</th>
                            <td>106</td>
                        </tr>
                    </table>
                </p>
            </div>
            <div>
                <button
                    className="doctor-name"
                    onClick={() => expandOnClick(6)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "1%" }}
                    />
                    <span>Dr. IPS Oberoi</span>
                </button>
                <p className="doctor-detail a6">
                    <table>
                        <tr>
                            <th>Category</th>
                            <td>Endocrinologist</td>
                        </tr>
                        <tr>
                            <th>Contact No.</th>
                            <td>9698521000</td>
                        </tr>
                        <tr>
                            <th>Availability</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Cabin No.</th>
                            <td>106</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
    );
}

export default Patient;
