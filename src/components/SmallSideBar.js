import React from "react";
import styled from "styled-components";
import icon from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms, FaTimes } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
// import { useSelector } from "react-redux";

const SmallSideBar = () => {
  // const { isSideBarOpen } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const toggleFun = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <section className="content">
        <div className="close-btn" onClick={toggleFun}>
          <FaTimes />
        </div>
        <img src={icon} alt="logo" />
        <div className="links">
          <NavLink to="/" className="item" onClick={toggleFun}>
            <IoBarChartSharp />
            Stats
          </NavLink>
          <NavLink to="alljobs" className="item" onClick={toggleFun}>
            <MdQueryStats />
            All Jobs
          </NavLink>
          <NavLink to="addjob" className="item" onClick={toggleFun}>
            <FaWpforms />
            Add Job
          </NavLink>
          <NavLink to="profile" className="item" onClick={toggleFun}>
            <ImProfile />
            Profile
          </NavLink>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;

  @media (max-width: 992px) {
    display: block;

    /* height: 100vh; */

    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    opacity: 1;
    transition: 0.3s ease-in-out all;

    .content {
      background-color: white;
      border-radius: 5px;
      width: 90%;
      height: 95%;
      text-align: center;
      position: relative;

      img {
        margin-top: 5rem;
      }

      .close-btn {
        position: absolute;
        left: 10px;
        top: 10px;

        svg {
          color: #842029;
          font-size: 2rem;
        }
      }

      .links {
        margin-top: 2.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .item {
        height: 60px;
        width: 105px;
        display: flex;
        align-items: center;

        color: #627d98;
        font-size: 1.2rem;

        svg {
          margin-right: 1rem;
          font-size: 1.5rem;
        }

        &:hover {
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
    }
  }
`;
export default SmallSideBar;
