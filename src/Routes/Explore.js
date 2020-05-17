import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import FatText from "../Components/FatText";
import SquarePost from "../Components/SquarePost";

const EXPLORE = gql`
  {
    explore {
      id
      likeCount
      commentCount
      files {
        url
      }
    }
  }
`;

const PostSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

export default () => {
  const { data, loading } = useQuery(EXPLORE);
  if (loading) {
    return <Loader></Loader>;
  } else if (!loading && data && data.explore) {
    return (
      <PostSection>
        {data.explore.length === 0 ? (
          <FatText text="No Posts Found" />
        ) : (
          data.explore.map((post) => (
            <SquarePost
              key={post.id}
              id={post.id}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              file={post.files[0]}
            />
          ))
        )}
      </PostSection>
    );
  }
};
