import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// After Meteor loads in teh browser, render my dapp to the dom.

let App = () => {
  return (

    <div> Hello There </div>

  );
};




Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});
