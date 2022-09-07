import React from "react";
import styled from "styled-components";
import notFoundImage from "../assets/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src={notFoundImage} alt="not found" />
      <h1>Ohh! Page not found</h1>
      <p>We can't seem to find page you are looking for</p>
      <Link to="/">Back Home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: #f0f4f8;
  min-height: 100vh;
  text-align: center;

  img {
    width: 600px;
    height: auto;
    object-fit: cover;
    text-align: center;
    margin-top: 6rem;
  }

  h1 {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 300;
    color: #102a43;
  }

  p {
    color: #627d98;
    font-size: 1.1rem;
  }

  a {
    text-decoration: underline;
    color: #3b82f6;
    font-size: 1.1rem;
  }
`;
export default Error;
