import DocFormWrapper from "../styles/DocFromWrapper";
import { useEffect, useState } from "react";
import Info from "./Info";
const DocForm = () => {
    const [showPage,setShowPage]=useState(false);
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");
  const [notes, setNotes] = useState("");
  const [medicine, setMedicine] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [Sno,setSno]=useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSno(Math.floor(Math.random() * 10));
    setShowPage(true);
    alert("please refresh to go back to doctors form")
  }

  return (
    <DocFormWrapper>
        {showPage ? <Info patientName={patientName} age={age} gender={gender} notes={notes} medicine={medicine} date={date} sNo={Sno}/> :
        (
      <div className="contianer">
        <h4>Patient Info</h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name:</label>
            <input
              className="form-input"
              placeholder="name"
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="patientName">Patient Age:</label>
            <input
            className="form-input"
              placeholder="Age"
              type="number"
              min={0}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="patientName">Patient Gender:</label>
            <select className="list" name="gender" id="gender" onChange={(e)=> setGender(e.target.value)} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="patientName">Date:</label>
            <input
            className="form-input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="patientName">Notes:</label>
            <input
            className="form-input"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="patientName">Medicine Details:</label>
            <input
            className="form-input"
              type="text"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
            />
          </div>
          <div className="form-btn">
          <button className="btn" type="submit">Submit</button>
          </div>
          
        </form>
      </div>)}
    </DocFormWrapper>
  );
};

export default DocForm;
