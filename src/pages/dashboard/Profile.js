import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const initialState = {
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    location: user.location,
  };

  const [data, setData] = useState(initialState);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name, value);

    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { name, lastName, email, location } = data;

    console.log(name, lastName, email, location);

    if (!name || !lastName || !email || !location) {
      toast.error("Please fill out all values.");

      return;
    }

    // dispatch(updateUser({ name, lastName, email, location }));
    dispatch(updateUser(data));
  };

  return (
    <Wrapper>
      <section className="container">
        <h1>Profile</h1>

        <form className="form-cls" onSubmit={submitHandler}>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={data.name}
              name="name"
              onChange={changeHandler}
            />
          </div>

          <div className="row">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              value={data.lastName}
              name="lastName"
              onChange={changeHandler}
            />
          </div>

          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={data.email}
              name="email"
              onChange={changeHandler}
            />
          </div>

          <div className="row">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              value={data.location}
              name="location"
              onChange={changeHandler}
            />
          </div>

          <div className="row">
            <button className="btn" type="submit">
              {isLoading ? "Updating..." : "Save Changes"}
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
    margin-top: 2rem;
    border-radius: 5px;
    background-color: white;
    width: 90%;
    height: 78%;

    box-shadow: 1px 1px 8px lightgray;

    h1 {
      font-size: 2rem;
      font-weight: 400;
      margin-left: 2rem;
      letter-spacing: 0.1rem;
      padding-bottom: -5px;
    }

    .form-cls {
      width: 95%;
      display: grid;
      grid-template-columns: auto;
      margin-left: 2rem;
      margin-right: 2rem;

      .row {
        margin-top: 0.7rem;
      }

      label {
        font-size: 1.1rem;
      }

      input {
        margin-top: 0.6rem;
        width: 91%;
        height: 30px;
        font-size: 1rem;
        border: 1px solid #93c5fd;
        background-color: #f0f4f8;
        border-radius: 5px;
        padding-left: 0.6rem;
      }

      .btn {
        width: 95%;
        height: 35px;
        margin-top: 1.6rem;
        background-color: #3b82f6;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        cursor: pointer;

        &:hover {
          background-color: #1d4ed8;
        }
      }
    }
  }

  @media (min-width: 720px) {
    .container {
      height: 56%;

      .form-cls {
        display: grid;
        grid-template-columns: auto auto;
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      height: 56%;

      .form-cls {
        display: grid;
        grid-template-columns: auto auto;
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
  }

  @media (min-width: 1120px) {
    .container {
      height: 48%;

      .form-cls {
        display: grid;
        grid-template-columns: auto auto auto;
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
  }
`;
export default Profile;
