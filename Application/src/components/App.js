import React, { Component } from 'react';
import JSXComponent from './JSXComponent';
import ClassBased from './ClassBased'
import Stateless from './Stateless'
import Props from './Props'
import RenderChildren from './RenderChildren';
import StateComponent from './StateComponent';
import Event from './Event';
import EventParent from './EventParent';
import Forms from './Forms';
import PropTypesComponent from './PropTypes';
import RefComponent from './RefComponent';
import MouseTracker from './MouseTrackerComponent';
import FragmentComponent from './FragmentComponent';
import StyleInline from './StyleInline';
import StyleFromOutside from './StyleFromOutside'
import StyledWidthSass from './StyledWidthSass'
import StyledComponent from './StyledComponent'
import HighOrderComponent from './HighOrderComponent'
import HighOrderUseBorder from './HighOrderUseBorder';
import '../styles/testingsass.scss';





class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassBased/>
        <Stateless/>
        <JSXComponent/>
        <Props firstName="Prop"/>
        <PropTypesComponent name="yuri"></PropTypesComponent>
        <RenderChildren><p>children</p></RenderChildren>
        <StateComponent/>
        <Event id="1"/>
        <EventParent/>
        <Forms/>
        <RefComponent/>
        <MouseTracker/>
        <FragmentComponent/>
        <StyleInline/>
        <StyleFromOutside/>
        <StyledWidthSass/>
        <StyledComponent/>
        <HighOrderComponent/>
        <HighOrderUseBorder/>
      </div>
    );
  }
}

export default App;

