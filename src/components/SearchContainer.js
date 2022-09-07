import styled from "styled-components";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchContainer = () => {
  const { search, status, jobType, sort } = useSelector(
    (store) => store.allJobs
  );

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <section className="container">
        <h1>Search Form</h1>

        <form className="form-cls" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleSearch}
            />
          </div>

          <div className="row">
            <label htmlFor="status">Status</label>
            <select name="status" value={status} onChange={handleSearch}>
              <option value="all">all</option>
              <option value="interview">interview</option>
              <option value="declined">declined</option>
              <option value="pending">pending</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="type">Type</label>
            <select name="jobType" value={jobType} onChange={handleSearch}>
              <option value="all">all</option>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="remote">remote</option>
              <option value="internship">internship</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="sort">Sort</label>
            <select name="sort" value={sort} onChange={handleSearch}>
              <option value="latest">latest</option>
              <option value="oldest">oldest</option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
            </select>
          </div>

          <div className="row ">
            <button className="btn2" type="submit">
              Clear Filters
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* border-left: 1px solid lightgray;
  height: 100vh; */

  display: flex;
  justify-content: center;

  .container {
    width: 90%;
    height: 80%;
    background-color: white;
    border-radius: 5px;
    margin-top: 2rem;
    box-shadow: 2px 2px 10px 1px lightgray;
    padding-bottom: 2rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      margin-left: 1.7rem;
      margin-top: 3rem;
    }

    .form-cls {
      /* width: 95%; */
      display: grid;
      grid-template-columns: 1fr;
      margin-right: 2.3rem;

      label {
        margin-left: 1.7rem;
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }
      input {
        width: 93%;
        height: 30px;
        margin-left: 1.7rem;

        margin-top: 0.7rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        border: 1px solid #93c5fd;
        background-color: #f0f4f8;
      }

      select {
        width: 94%;
        height: 34px;
        margin-left: 1.7rem;

        margin-top: 0.7rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        border: 1px solid #93c5fd;
        background-color: #f0f4f8;
      }

      .row {
        margin-top: 0.8rem;
      }

      .btn2 {
        margin-top: 1.8rem;
        margin-left: 1.7rem;
        width: 93%;
        height: 35px;
        background: none;
        border: none;
        border-radius: 5px;
        color: #842029;
        font-size: 1rem;
        background: #f8d7da;

        &:hover {
          background: #842029;
          color: white;
        }
      }
    }
  }

  @media (min-width: 720px) {
    .container {
      height: 50%;
      padding-bottom: 2rem;

      .form-cls {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      height: 50%;
      padding-bottom: 2rem;

      .form-cls {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (min-width: 1120px) {
    .container {
      height: 42%;
      padding-bottom: 2rem;

      .form-cls {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
`;
export default SearchContainer;
