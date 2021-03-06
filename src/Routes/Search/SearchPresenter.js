import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  height: 50vh;
`;

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0 ? (
            <FatText text="No Users Found" />
          ) : (
            data.searchUser.map((user) => {
              return (
                <UserCard
                  key={user.id}
                  id={user.id}
                  userName={user.userName}
                  isFollowing={user.isFollowing}
                  url={user.avatar}
                  isSelf={user.isSelf}
                />
              );
            })
          )}
        </Section>
        <PostSection>
          {data.searchPost.length === 0 ? (
            <FatText text="No Posts Found" />
          ) : (
            data.searchPost.map((post) => (
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
      </Wrapper>
    );
  } else {
    return <div />;
  }
};

SearchPresenter.propTypes = {
  searchTerm: PropsTypes.string,
  loading: PropsTypes.bool,
};

export default SearchPresenter;
