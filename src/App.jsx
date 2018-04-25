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
        <div>
          {rootStore.topStories.length > 0 ? (
            rootStore.topStories.map(story => (
              <Story  key={story.id} {...story} />
            ))
          ) : (
            <Loading>Loading Stories...</Loading>
          )}
        </div>
      </TopLevel>
    );
  }
}

export default observer(App);
