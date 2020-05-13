import React from "react";
import Button from "../Button";

export default ({ isFollowing, onClick }) => (
  <Button text={isFollowing ? "unFollow" : "Follow"} onClick={onClick} />
);
