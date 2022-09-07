import styled from "styled-components";
import Job from "./Job";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../components/Loading";
import PageBtnContainer from "../components/PageBtnContainer";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    allJobs,
    numOfPages,
    totalJobs,
    search,
    status,
    jobType,
    sort,
    page,
  } = useSelector((store) => store.allJobs);

  // console.log(allJobs);

  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, status, jobType, sort]);

  return (
    <Wrapper>
      {isLoading && (
        <div className="loading-cls">
          <Loading />
        </div>
      )}

      <h1>
        {totalJobs === 0
          ? "No Jobs to display..."
          : `${totalJobs} Job${totalJobs > 1 ? "s" : ""} Found`}
      </h1>

      <div className="data">
        {allJobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>

      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* border-left: 1px solid lightgray; */

  margin-left: 4rem;

  .loading-cls {
    margin-top: 2rem;
  }

  h1 {
    margin-top: 4rem;
  }

  .data {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    width: 96%;

    @media (min-width: 720px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }

    margin-bottom: 2rem;
  }
`;
export default JobsContainer;
