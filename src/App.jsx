import React, { Component } from 'react';
import {observer} from "mobx-react";
import rootStore from "./rootStore"

class App extends Component {

  render() {
    console.log("***********")
      console.log(rootStore.topStories)
    return (
        <div>
        <div>hello!</div>
        <div>{
          rootStore.topStories.map(story=>(<div key={story.id}>{story.title}</div>))
        }</div>
        </div>
    );
  }
}

export default observer(App);