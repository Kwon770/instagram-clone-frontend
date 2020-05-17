import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
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

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
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
    const [logOut] = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
  }
);
