import React, { Component } from "react";
import styled from "styled-components";
import TimeAgo from "react-timeago";

const HEIGHT = "220px";
const MAX_WIDTH = "800px";
const MARGIN = "5vw";
const ICONS_GREY = "#c5c5c5";
const BLACKISH_TEXT = "#3e3e3e";

const Card = styled.div`
  height: ${HEIGHT};
  margin: ${MARGIN};
  max-width: ${MAX_WIDTH};
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PostingTime = styled(TimeAgo)`
  color: ${ICONS_GREY};
`;

const Title = styled.div`
  color: ${BLACKISH_TEXT};
`;

const LinkButton = styled.a`
  color: ${BLACKISH_TEXT};
  background: ${ICONS_GREY};
  &:hover {
    background: #395dff;
    color: white;
  }
`;

export default function Story({
  id,
  postingTime,
  author,
  title,
  url,
  score,
  commentsNum
}) {
  console.log(postingTime);
  return (
    <Card>
      <PostingTime date={postingTime} />
      <Title>{title}</Title>
      <LinkButton href={url} target="_blank">
        {url || "No URL"}
      </LinkButton>
      Likes: {score}
      Comments: {commentsNum}
    </Card>
  );
}
