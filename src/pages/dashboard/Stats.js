import styled from "styled-components";
import StatsContainer from "../../components/StatsContainer";
import { useSelector } from "react-redux";
import ChartsContainer from "../../components/ChartsContainer";

const Stats = () => {
  const { monthlyApplications } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border-left: 1px solid lightgray;

  h1 {
    font-size: 1.7rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    margin-top: 4rem;
  }

  .btn {
    border: none;
    background: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #3b82f6;
  }
`;
export default Stats;
