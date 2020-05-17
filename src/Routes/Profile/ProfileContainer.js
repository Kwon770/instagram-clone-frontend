import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import ProfilePresenter from "./ProfilePresenter";

const GET_PROFILE = gql`
  query seeUser($userName: String!) {
    seeUser(userName: $userName) {
      id
      avatar
      userName
      fullName
      isFollowing
      isSelf
      bio
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
      postsCount
      followingCount
      followersCount
    }
  }
`;

export default withRouter(
  ({
    match: {
      params: { userName },
    },
  }) => {
    const { data, loading } = useQuery(GET_PROFILE, {
      variables: { userName },
    });
    return <ProfilePresenter loading={loading} data={data} />;
  }
);
