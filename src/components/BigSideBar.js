import React from "react";
import styled from "styled-components";
import icon from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const BigSideBar = () => {
  return (
    <Wrapper>
      <img src={icon} alt="logo" />
      <div className="links">
        <NavLink to="/" className="item">
          <IoBarChartSharp />
          Stats
        </NavLink>
        <NavLink to="alljobs" className="item">
          <MdQueryStats />
          All Jobs
        </NavLink>
        <NavLink to="addjob" className="item">
          <FaWpforms />
          Add Job
        </NavLink>
        <NavLink to="profile" className="item">
          <ImProfile />
          Profile
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  /* position: fixed; */

  img {
    margin-top: 1.5rem;
    margin-left: 2.5rem;
    margin-right: 1.5rem;
  }

  .links {
    margin-top: 2.5rem;
  }

  .item {
    height: 60px;

    display: flex;
    align-items: center;

    color: #627d98;
    font-size: 1.2rem;
    transition: all 0.3s linear;
    padding-left: 2.7rem;

    svg {
      margin-right: 1rem;
      font-size: 1.5rem;
    }

    &:hover {
      padding-left: 3.2rem;
      background: hsl(210, 36%, 96%);
      color: hsl(211, 39%, 23%);

      svg {
        color: #3b82f6;
      }
    }
  }

  .active {
    svg {
      color: #3b82f6;
    }

    color: #243b53;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;
export default BigSideBar;
