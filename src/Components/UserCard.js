import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Card = styled.div``;

const UserCard = ({ userName, isFollowing, url, isSelf }) => (
  <Card>
    <Avatar url={url} />
    <FatText text={userName} />
    {!isSelf && <Button text={isFollowing ? "unFollow" : "Follow"} />}
  </Card>
);

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
};

export default UserCard;
