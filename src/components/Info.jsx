import React from "react";
import InfoWrapper from "../styles/InfoWrapper";
const Info = (props) => {
    //destructure props
    const {patientName,age,gender,notes,medicine,date,Sno}=props;
  return (
    <InfoWrapper>
      <div className="heading">
        <h1>Test Hospital Name</h1>
        <h4>
          Dr. John Killer <span>M.B.B.S. , M.S.(ortho)</span>
        </h4>
        <div className="address">
          <p>9339 W Lake Dr ## A, Eagle River </p>
          <p>Alaska 99577, USA</p>
          <p>PH: (207)814 2015 2022</p>
          <p>FAX: (207)814 2015 2022</p>
        </div>
      </div>
        <div className="info">
            <p className="right">
                <span>S.No:</span>
                <span>{Sno}</span>
            </p>
            <p className="detail">
                <span>Patient Name:</span>
                <span className="border">{patientName}</span>
            </p>
            <p className="detail">
                <span>Patient Age:</span>
                <span className="border">{age}</span>
            </p>
            <p className="detail">
                <span>Patient Gender:</span>
                <span className="border">{gender}</span>
            </p>
            <p className="detail">
                <span>Date:</span>
                <span className="border">{date}</span>
            </p>
            <p className="detail">
                <span>Patient Notes:</span>
                <span className="border">{notes}</span>
            </p>
            <p className="detail">
                <span>Medicine:</span>
                <span className="border">{medicine}</span>
            </p>
            <p className="right mr">
                <span>Doctor's Signature:</span>
                <span className="border"></span>
            </p>
        </div>
        <div>
            <p>www.hospitalmail@mail.com</p>
        </div>
    </InfoWrapper>
  );
};

export default Info;
