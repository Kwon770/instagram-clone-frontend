import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import FatText from "../Components/FatText";

const Wrapper = styled.div`
  height: 50vh;
`;

const SearchPresenter = ({ searchTerm, loading }) => (
  <Wrapper>
    {searchTerm === undefined && <FatText text={"Search for Something"} />}
  </Wrapper>
);

SearchPresenter.propTypes = {
  searchTerm: PropsTypes.string,
  loading: PropsTypes.bool,
};

export default SearchPresenter;
