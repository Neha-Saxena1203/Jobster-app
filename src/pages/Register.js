import React, { useEffect } from "react";
import styled from "styled-components";
import icon from "../assets/logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [loginState, setLoginState] = useState(true);
  const [values, setValues] = useState(initialState);

  const { isLoading, user } = useSelector((store) => store.user);
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = values;

    if (loginState) {
      if (!email || !password) {
        toast.error("Please fill out all fields");
        return;
      }

      dispacth(loginUser({ email, password }));
    }

    if (!loginState) {
      if (!email || !password || !name) {
        toast.error("Please fill out all fields");
        return;
      }

      dispacth(registerUser({ email, password, name }));
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Wrapper>
      <section className="card">
        <div className="top-border" />

        <img src={icon} alt="icon" />
        {loginState ? <h1>Login</h1> : <h1>Register</h1>}

        <form onSubmit={onSubmit}>
          {!loginState && (
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={handleChange} />
            </div>
          )}

          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />

          <button className="btn-submit" disabled={isLoading} type="submit">
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <button
            className="btn-demo"
            type="button"
            onClick={() => {
              dispacth(
                loginUser({ email: "testUser@test.com", password: "secret" })
              );
            }}
          >
            Demo App
          </button>
        </form>
        {loginState ? (
          <p>
            Not a member yet?{" "}
            <span
              onClick={() => {
                setLoginState(false);
              }}
            >
              Register
            </span>
          </p>
        ) : (
          <p>
            Already a member?{" "}
            <span
              onClick={() => {
                setLoginState(true);
              }}
            >
              Login
            </span>
          </p>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
  min-height: 100vh;

  .card {
    border-radius: 5px;
    background-color: white;
    width: 340px;
    height: 50%;
    text-align: center;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    position: relative;

    .top-border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #3b82f6;
    }

    img {
      margin-top: 8px;
    }

    h1 {
      letter-spacing: 0.15rem;
      font-size: 2rem;
      font-weight: 500;
    }

    label {
      margin-top: 1.5rem;
      display: block;
      text-align: left;
      width: 95%;
      margin-left: 1rem;
      font-size: 1.1rem;
    }
    input {
      margin-top: 1rem;
      width: 90%;
      height: 30px;
      border: 1px solid #93c5fd;
      background-color: #f0f4f8;
      border-radius: 5px;
    }

    .btn-submit {
      margin-top: 2rem;
      width: 92%;
      height: 35px;
      background-color: #3b82f6;
      border: none;
      border-radius: 5px;
      letter-spacing: 0.1rem;
      color: white;
      font-size: 1rem;

      &:hover {
        background-color: #1d4ed8;
        cursor: pointer;
      }
    }

    .btn-demo {
      margin-top: 1.3rem;
      width: 92%;
      height: 35px;
      background-color: #bfdbfe;
      border: none;
      border-radius: 5px;
      letter-spacing: 0.1rem;
      color: #3b82f6;
      font-size: 1rem;
      box-shadow: 0 2px #f0f4f8;

      &:hover {
        background-color: #1d4ed8;
        cursor: pointer;
      }
    }

    p {
      span {
        color: #3b82f6;
        cursor: pointer;
      }
    }
  }
`;
export default Register;
