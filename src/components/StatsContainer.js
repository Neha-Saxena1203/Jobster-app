import styled from "styled-components";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { useEffect } from "react";
import { getStats } from "../features/allJobs/allJobsSlice";
import { useDispatch, useSelector } from "react-redux";

const StatsContainer = () => {
  const dispatch = useDispatch();
  const { allStats } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getStats());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <section className="container">
        <section className="card ">
          <div className="item">
            <h1>{allStats.pending}</h1>
            <div className="icon1">
              <FaSuitcaseRolling />
            </div>
          </div>
          <h3>Pending Applications</h3>
          <div className="bottom-col1"></div>
        </section>
        <section className="card ">
          <section className="card ">
            <div className="item">
              <h1 style={{ color: "#647acb" }}>{allStats.interview}</h1>
              <div className="icon2">
                <FaCalendarCheck />
              </div>
            </div>
            <h3>Interviews Scheduled</h3>
            <div className="bottom-col1"></div>
          </section>
          <div className="bottom-col2"></div>
        </section>
        <section className="card ">
          <section className="card ">
            <div className="item">
              <h1 style={{ color: "#d66a6a" }}>{allStats.declined}</h1>
              <div className="icon3">
                <FaBug />
              </div>
            </div>
            <h3>Jobs Declined</h3>
            <div className="bottom-col1"></div>
          </section>
          <div className="bottom-col3"></div>
        </section>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 15px;
    row-gap: 15px;
    margin-top: 2rem;
    width: 100%;
    margin-left: 2rem;
    margin-right: 2rem;

    .card {
      width: 100%; //optional
      /* width: 350px; */
      height: 195px;
      border-radius: 5px;
      background-color: white;
      box-shadow: 2px 2px 10px 1px lightgray;
      position: relative;

      h3 {
        font-size: 1.3rem;
        font-weight: 400;
        letter-spacing: 0.09rem;
        margin-left: 2.1rem;
        margin-top: 2.1rem;
      }

      .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100px;

        h1 {
          margin-left: 2.1rem;
          margin-top: 3.1rem;
          font-size: 3rem;
          color: #e9b949;
        }

        .icon1 {
          width: 70px;
          height: 63px;
          background-color: #fcefc7;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;

          margin-right: 2.1rem;
          margin-top: 3rem;

          svg {
            color: #e9b949;
            font-size: 2.1rem;
          }
        }

        .icon2 {
          width: 70px;
          height: 63px;
          background-color: #e0e8f9;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;

          margin-right: 2.1rem;
          margin-top: 3rem;

          svg {
            color: #647acb;
            font-size: 2.1rem;
          }
        }

        .icon3 {
          width: 70px;
          height: 63px;
          background-color: #ffeeee;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;

          margin-right: 2.1rem;
          margin-top: 3rem;

          svg {
            color: #d66a6a;
            font-size: 2.1rem;
          }
        }
      }
    }

    .bottom-col1 {
      /* width: 350px; */
      width: 100%;
      height: 5px;
      background-color: #e9b949;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .bottom-col2 {
      /* width: 350px; */
      width: 100%;
      height: 5px;
      background-color: #647acb;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .bottom-col3 {
      /* width: 350px; */
      width: 100%;
      height: 5px;
      background-color: #d66a6a;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  @media (min-width: 720px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;

      /* .card {
        width: 300px;
        height: 195px;
      } */
    }
  }

  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;

      /* .card {
        width: 300px;
        height: 195px;
      } */
    }
  }

  @media (min-width: 1120px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      /* .card {
        width: 350px;
        height: 195px; 
      }*/
    }
  }
`;
export default StatsContainer;
