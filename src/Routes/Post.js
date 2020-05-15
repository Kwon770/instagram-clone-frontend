import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const GET_POST = gql`
  query getPost($id: String!) {
    seeFullPost(id: $id) {
      id
      location
      caption
      user {
        id
        avatar
        userName
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          userName
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

export default withRouter(({ location: { pathname } }) => {
  const id = pathname.split("=")[1];
  const { data, loading } = useQuery(GET_POST, {
    variables: {
      id,
    },
  });
  return (
    <Wrapper>
      <Helmet>
        <title>Post | Prismagram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading && data && data.seeFullPost && (
        <Post
          id={data.seeFullPost.id}
          location={data.seeFullPost.location}
          caption={data.seeFullPost.caption}
          user={data.seeFullPost.user}
          files={data.seeFullPost.files}
          likeCount={data.seeFullPost.likeCount}
          isLiked={data.seeFullPost.isLiked}
          comments={data.seeFullPost.comments}
          createdAt={data.seeFullPost.createdAt}
        />
      )}
    </Wrapper>
  );
});
