import React from "react";
import SearchContainer from "../../components/SearchContainer";
import JobsContainer from "../../components/JobsContainer";
import styled from "styled-components";

const AllJobs = () => {
  return (
    <Wrapper>
      <SearchContainer />
      <JobsContainer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border-left: 1px solid lightgray;
`;
export default AllJobs;
