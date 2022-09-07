import React from "react";
import styled from "styled-components";
import { NavBar, SmallSideBar, BigSideBar } from "../../components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const { isSideBarOpen } = useSelector((store) => store.user);

  console.log(isSideBarOpen);
  return (
    <Wrapper>
      <main className={`${isSideBarOpen ? "dashboard" : "dashboard1"}`}>
        {isSideBarOpen && <SmallSideBar />}
        {isSideBarOpen && <BigSideBar />}

        <div>
          <NavBar />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f0f4f8;
  /* min-height: 100vh; */

  .dashboard {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .dashboard1 {
    /* transition: 0.3s ease-in-out all; */
  }

  /* .content {
    margin-top: 6rem;
    width: 83vw;
  } */

  @media (max-width: 992px) {
    .dashboard {
      display: grid;
      grid-template-columns: auto;
    }
  }
`;
export default SharedLayout;
