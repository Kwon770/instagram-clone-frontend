import React from "react";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";

export default withRouter(({ location: { search } }) => {
  const term = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined, // if the conditions what skip get is true, don't send this query
    variables: {
      term,
    },
  });
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
});
