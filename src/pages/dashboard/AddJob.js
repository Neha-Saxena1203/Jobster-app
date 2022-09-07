import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { submitJob, editJob } from "../../features/job/jobSlice";

const AddJob = () => {
  const { user } = useSelector((store) => store.user);
  const { isLoading, isEditting, values } = useSelector((store) => store.job);

  const initialState = {
    position: "",
    company: "",
    jobLocation: user.location,
    status: "pending",
    jobType: "full-time",
  };

  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(values);
    if (isEditting) {
      setData({ ...values });
    }
    // console.log(data);
    // eslint-disable-next-line
  }, [isEditting]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name, value);

    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { position, company, jobLocation, status, jobType } = data;

    // console.log(data);

    if (!position || !company || !jobLocation || !status || !jobType) {
      toast.error("Please fill out all values ");
      return;
    }

    if (isEditting) {
      dispatch(
        editJob({
          jobId: values.id,
          job: data,
        })
      );
    } else {
      dispatch(submitJob(data));
    }

    setData(initialState);
  };

  return (
    <Wrapper>
      <section className="container">
        <h1>{isEditting ? "Edit Job" : "Add Job"}</h1>

        <form className="form-cls" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              value={data.position}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              value={data.company}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="location">Job Location</label>
            <input
              type="text"
              name="jobLocation"
              value={data.jobLocation}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="status">Status</label>
            <select name="status" onChange={handleChange} value={data.status}>
              <option value="interview">interview</option>
              <option value="declined">declined</option>
              <option value="pending">pending</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="type">Job Type</label>
            <select name="jobType" onChange={handleChange} value={data.jobType}>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="remote">remote</option>
              <option value="internship">internship</option>
            </select>
          </div>

          <div className="row btn-con">
            <button
              className="btn1"
              onClick={() => {
                setData(initialState);
              }}
              type="button"
            >
              Clear
            </button>
            <button className="btn2" type="submit">
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border-left: 1px solid lightgray;
  height: 86.5vh;

  display: flex;
  justify-content: center;

  .container {
    width: 90%;
    height: 83%;
    background-color: white;
    border-radius: 5px;
    margin-top: 2rem;
    box-shadow: 2px 2px 10px 1px lightgray;

    h1 {
      font-size: 1.8rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      margin-left: 1.7rem;
      margin-top: 3rem;
    }

    .form-cls {
      display: grid;
      grid-template-columns: auto;
      margin-right: 2.3rem;

      label {
        margin-left: 1.7rem;
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }

      input {
        width: 93%;
        height: 30px;
        margin-left: 1.7rem;

        margin-top: 0.7rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        border: 1px solid #93c5fd;
        background-color: #f0f4f8;
      }

      select {
        width: 93%;
        height: 34px;
        margin-left: 1.7rem;

        margin-top: 0.7rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        border: 1px solid #93c5fd;
        background-color: #f0f4f8;
      }

      .row {
        margin-top: 0.8rem;
      }

      .btn-con {
        display: grid;
        grid-template-columns: auto auto;
        margin-left: 1.8rem;

        .btn1 {
          margin-top: 1.8rem;
          width: 98%;
          height: 34px;
          background: none;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 1rem;
          background: #627d98;

          &:hover {
            background: #222;
          }
        }

        .btn2 {
          margin-top: 1.8rem;
          margin-left: 0.5rem;
          width: 98%;
          height: 34px;
          background: none;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 1rem;
          background: #3b82f6;

          &:hover {
            background: #1d4ed8;
          }
        }
      }
    }
  }

  @media (min-width: 720px) {
    .container {
      height: 53%;

      .form-cls {
        display: grid;
        grid-template-columns: auto auto;
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      height: 53%;

      .form-cls {
        display: grid;
        grid-template-columns: auto auto;
      }
    }
  }

  @media (min-width: 1120px) {
    .container {
      height: 45%;

      .form-cls {
        display: grid;
        grid-template-columns: auto auto auto;
      }
    }
  }
`;
export default AddJob;
