import styled from "styled-components";
import React, { useState } from "react";
import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const [isAreaChart, setIsAreaChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h1>Monthly Applications</h1>
      <button
        className="btn"
        onClick={() => {
          setIsAreaChart(!isAreaChart);
        }}
      >
        {isAreaChart ? "Area Chart" : "Bar Chart"}
      </button>

      {isAreaChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  margin-bottom: 2rem;
`;
export default ChartsContainer;
