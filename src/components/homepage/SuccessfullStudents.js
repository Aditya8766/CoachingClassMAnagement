import "./successfull-students.scss";
import man from "../../assets/man2.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const SuccessfullStudents = () => {
  return (
    <div className="expert-students">
      <h3>Our Successfull Students</h3>
      <h4>
        <FormatQuoteIcon className="material-icon" />
        <span className="slogan">
          Be Best Version of yourself With Ultra Smart Abacus
        </span>
        <FormatQuoteIcon />
      </h4>
      <div className="boxes">
        <div className="box">
          <img src={man} alt="man" height="180px" width="180px" />
          <span>Student Name</span>
          <div className="content">
            <div className="text">description of students and marks</div>
          </div>
        </div>

        <div className="box">
          <img src={man} alt="man" height="180px" width="180px" />
          <span>Student Name</span>
          <div className="content">
            <div className="text">description of students and marks</div>
          </div>
        </div>

        <div className="box">
          <img src={man} alt="man" height="180px" width="180px" />
          <span>Student Name</span>
          <div className="content">
            <div className="text">description of students and marks</div>
          </div>
        </div>

        <div className="box">
          <img src={man} alt="man" height="180px" width="180px" />
          <span>Student Name</span>
          <div className="content">
            <div className="text">description of students and marks</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessfullStudents;
