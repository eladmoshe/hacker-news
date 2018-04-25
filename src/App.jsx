import React, { Component } from "react";
import { observer } from "mobx-react";
import rootStore from "./rootStore";
import styled from "styled-components";
import Header from "./Header";
import Story from "./Story";

const TopLevel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Lato;
  background: #f7f7f7;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
`

const Loading = styled.div`
  font-weight: bold;
  margin: auto;
  justify-self: center;
`;

class App extends Component {
  render() {
    return (
      <TopLevel>
        <Header />
        <CardList>
          {rootStore.topStories.length > 0 ? (
            rootStore.topStories.map(story => (
              <Story  key={story.id} {...story} />
            ))
          ) : (
            <Loading>Loading Stories...</Loading>
          )}
        </CardList>
      </TopLevel>
    );
  }
}

export default observer(App);
