import styled from "styled-components";
import React from "react";

const LOGO_SIZE = `60px`;
const HN_ORANGE_PALE = "#FF7F2A";
const HN_ORANGE = "#ff6600";

const TopLevelContainer = styled.div`
  width: 100%;
  height: ${LOGO_SIZE};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: ${HN_ORANGE};
`;

const Logo = styled.div`
  width: ${LOGO_SIZE};
  height: ${LOGO_SIZE};
  background: ${HN_ORANGE_PALE};
  color: white;
  font-size: xx-large;
  text-align: center;
  vertical-align: middle;
  line-height: ${LOGO_SIZE};
`;

export default function Header() {
  return (
    <TopLevelContainer>
      <Logo>Y</Logo>
    </TopLevelContainer>
  );
}
