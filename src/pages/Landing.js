import React from "react";
import styled from "styled-components";
import image from "../assets/main.svg";
import icon from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <section className="part1">
        <img src={icon} alt="logo" />
        <h1>
          Job <span>Tracking</span> App
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          maxime officia iusto doloremque consequatur mollitia, blanditiis
          veniam officiis qui, illum rerum excepturi sapiente quod quis labore.
        </p>
        <button className="btn" type="button">
          <Link to="/register">Login/Register</Link>
        </button>
      </section>
      <section className="part2">
        <img src={image} alt="main" />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  background-color: #f0f4f8;
  min-height: 100vh;

  .part1 {
    padding-left: 9rem;
    padding-right: 7rem;
    padding-top: 2rem;

    h1 {
      font-size: 3rem;
      margin-top: 12rem;
      color: #102a43;

      span {
        color: #3b82f6;
      }
    }

    p {
      line-height: 1.6;
      font-size: 1rem;
      color: #486581;
    }

    .btn {
      margin-top: 0.8rem;
      width: 170px;
      height: 40px;
      background-color: #3b82f6;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;

      &:hover {
        background-color: #1d4ed8;
      }
    }
  }

  .part2 {
    padding: 2rem 9rem;
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 500px;
      height: auto;
      object-fit: cover;
    }
  }

  @media (max-width: 970px) {
    grid-template-columns: auto;

    /* .part1 {
      padding-right: 7rem;
    } */

    .part2 {
      padding: 0;
      display: none;
    }
  }

  @media (max-width: 1100px) {
    .part1 {
      padding-left: 5rem;
      padding-right: 2rem;
    }

    .part2 {
      padding-right: 4rem;
    }
  }
`;
export default Landing;
