import styled from "styled-components";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEditting } from "../features/job/jobSlice";
import { deleteJob } from "../features/job/jobSlice";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  createdAt,
  jobType,
  status,
}) => {
  const date = moment(createdAt).format("MMM Do, YYYY");

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <section className="card">
        <div className="row1">
          <div className="box">{company.slice(0, 1)}</div>
          <div>
            <h3>{position}</h3>
            <h3
              style={{ marginTop: "-10px", color: "gray", fontWeight: "300" }}
            >
              {company}
            </h3>
          </div>
        </div>
        <hr className="line" />
        <div className="row2">
          <div style={{ marginLeft: "1.5rem" }}>
            <h4>
              <FaLocationArrow />
              <span>{jobLocation}</span>
            </h4>
            <h4>
              <FaBriefcase />
              <span>{jobType}</span>
            </h4>
          </div>
          <div>
            <h4>
              <FaCalendarAlt />
              <span>{date}</span>
            </h4>
            <button className={`btn ${status}`}>{status}</button>
          </div>
        </div>

        <div className="btn-con">
          <button
            className="btn1"
            onClick={() => {
              dispatch(
                setEditting({
                  _id,
                  position,
                  company,
                  jobLocation,
                  status,
                  jobType,
                })
              );
            }}
          >
            <Link to="/addjob">Edit</Link>
          </button>
          <button
            className="btn2"
            onClick={() => {
              dispatch(deleteJob({ jobId: _id }));
            }}
          >
            Delete
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    width: 96%;
    height: 93%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 1px lightgray;
    padding-bottom: 1rem;

    .row1 {
      display: grid;
      grid-template-columns: auto 1fr;

      .box {
        width: 65px;
        height: 65px;
        background-color: #3b82f6;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 1rem;
        margin-left: 1.5rem;
        color: white;
        font-size: 1.5rem;
      }

      h3 {
        margin-left: 2rem;
        margin-top: 20px;
      }
    }
    .line {
      border: none;
      border-top: 1px solid lightgray;
    }
    .row2 {
      display: grid;
      grid-template-columns: 1fr 1fr;

      h4 {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 300;
        letter-spacing: 0.1rem;

        svg {
          color: gray;
        }

        span {
          margin-left: 15px;
        }
      }

      .btn {
        width: 105px;
        height: 32px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }

      .interview {
        background: #e0e8f9;
        color: #647acb;
      }

      .declined {
        background: #ffeeee;
        color: #d66a6a;
      }

      .pending {
        background: #fcefc7;
        color: #e9b949;
      }
    }

    .btn-con {
      margin-left: 1.5rem;

      .btn1 {
        width: 55px;
        height: 31px;
        border: none;
        background: #d1e7dd;
        border-radius: 5px;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        cursor: pointer;

        a {
          color: #0f5132;
        }
      }

      .btn2 {
        margin-left: 10px;
        width: 75px;
        height: 31px;
        border: none;
        background: #f8d7da;
        border-radius: 5px;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        color: #842029;
        cursor: pointer;
      }
    }
  }
`;
export default Job;
