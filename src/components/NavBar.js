import React from "react";
import styled from "styled-components";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, logoutUser } from "../features/user/userSlice";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggleFun = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <main className="main">
        <section className="item1" onClick={toggleFun}>
          <FaAlignLeft />
        </section>
        <section>
          <h1>Dashboard</h1>
        </section>
        <section className="item3">
          <button
            className="btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <FaUserCircle />
            {user.name}
            {/* Test Test */}
            <FaCaretDown />
          </button>
          {toggle && (
            <button
              className="logout-btn"
              onClick={() => {
                dispatch(logoutUser("Logged out..."));
              }}
            >
              logout
            </button>
          )}
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: white;
  /* position: fixed;
  width: 100%; */

  /* overflow: hidden; */

  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;

    .item1 {
      margin-left: 3rem;

      svg {
        font-size: 1.7rem;
        color: #3b82f6;
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .item3 {
      position: relative;

      .btn {
        margin-right: 3.5rem;
        border: none;
        border-radius: 5px;
        background-color: #3b82f6;
        color: white;

        height: 32px;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        cursor: pointer;
        text-transform: capitalize;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-right: 5px;
          margin-left: 5px;
        }

        &:hover {
          background-color: #1d4ed8;
        }
      }

      .logout-btn {
        position: absolute;
        /* width: 100%; */
        width: calc(65%);
        height: 40px;
        top: 45px;
        border: none;
        border-radius: 5px;
        background-color: #dbeafe;
        color: #3b82f6;
        font-size: 1rem;
        text-transform: capitalize;
      }
    }
  }
`;
export default NavBar;
