import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }

    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <section className="container">
        <button className="left-btn" onClick={prevPage}>
          <HiChevronDoubleLeft />
          Prev
        </button>
        <div className="btn-con">
          {pages.map((pageNumber) => {
            return (
              <button
                key={pageNumber}
                className={pageNumber === page ? "btn active" : "btn"}
                onClick={() => {
                  dispatch(changePage(pageNumber));
                }}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        <button className="right-btn" onClick={nextPage}>
          Next
          <HiChevronDoubleRight />
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-bottom: 3rem;
  display: flex;
  justify-content: end;

  margin-right: 3.5rem;

  .container {
    /* display: flex; */
  }

  .left-btn {
    width: 100px;
    height: 40px;
    background: white;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #3b82f6;
    /* margin-right: 1rem; */
    margin-bottom: 0.8rem;

    svg {
      font-size: 1.1rem;
      margin-right: 10px;
    }

    &:hover {
      background-color: #3b82f6;
      color: white;
    }
  }

  .right-btn {
    width: 100px;
    height: 40px;
    background: white;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #3b82f6;
    /* margin-left: 1rem; */
    margin-top: 0.8rem;

    svg {
      font-size: 1.1rem;
      margin-left: 10px;
    }

    &:hover {
      background-color: #3b82f6;
      color: white;
    }
  }

  .btn-con {
    background-color: #dbeafe;
    border-radius: 5px;
    height: 40px;

    display: flex;
    align-items: center;

    .btn {
      width: 45px;
      border: none;
      background: none;
      font-size: 1.3rem;
    }

    .active {
      background-color: #3b82f6;
      color: white;
      border-radius: 5px;
      height: 40px;
    }
  }

  @media (min-width: 680px) {
    .container {
      display: flex;
      .left-btn {
        margin-right: 1rem;
        margin-bottom: 0;
      }
      .right-btn {
        margin-left: 1rem;
        margin-top: 0;
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      display: flex;
      .left-btn {
        margin-right: 1rem;
        margin-bottom: 0;
      }
      .right-btn {
        margin-left: 1rem;
        margin-top: 0;
      }
    }
  }

  @media (min-width: 1120px) {
    .container {
      display: flex;

      .left-btn {
        margin-right: 1rem;
        margin-bottom: 0;
      }

      .right-btn {
        margin-left: 1rem;
        margin-top: 0;
      }
    }
  }
`;
export default PageBtnContainer;
