import React, { Component } from "react";
import styled from "styled-components";
import TimeAgo from "react-timeago";
import MaterialIcon, {colorPalette} from 'material-icons-react';

const HEIGHT = "220px";
const MARGIN_SIDES = "20vw";
const MARGIN_TOP = "1vh";
const ICONS_GREY = "#c5c5c5";
const BLACKISH_TEXT = "#3e3e3e";
const ROW_ELEM_SPACING = "2px 30px 2px 2px";

const Card = styled.div`
  height: ${HEIGHT};
  margin: ${MARGIN_TOP} ${MARGIN_SIDES};
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2vw;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props=>props.justifyContent || "space-around;"}
`;


const Col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
`;

const PostingTime = styled(TimeAgo)`
  color: ${ICONS_GREY};
  margin: ${ROW_ELEM_SPACING};
`;

const Title = styled.h2`
  color: ${BLACKISH_TEXT};
  font-size: x-large;
`;

const Author = styled.div`
  color: ${ICONS_GREY};
  margin: ${ROW_ELEM_SPACING};
`;

const LinkButton = styled.a`
  color: ${BLACKISH_TEXT};
  background: ${ICONS_GREY};
  width: 25vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  padding: 5px 3px;
  margin: ${ROW_ELEM_SPACING};
  &:hover {
    background: #395dff;
    color: white;
  }
`;

const NumberInfo = styled.div`
  color: ${BLACKISH_TEXT};
  font-size: x-large;
  margin: ${ROW_ELEM_SPACING};
  font-weight: 400;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 
`;

const StyledIcon = styled(MaterialIcon)`
  margin: 4px;
  padding: 4px;
`

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
      <Row>
        <PostingTime date={postingTime} />
        <Author>{author}</Author>
      </Row>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row justifyContent="stretch">
        <Col justifyContent="flex-start">
          <LinkButton href={url} target="_blank">
            {url || "No URL"}
          </LinkButton>
        </Col>
        <Col justifyContent="flex-end">
          <NumberInfo><StyledIcon icon="ic_thumb_up"/>&nbsp;{score}</NumberInfo>
          <NumberInfo><StyledIcon icon="comment"/>&nbsp;{commentsNum}</NumberInfo>
        </Col>
      </Row>
    </Card>
  );
}
