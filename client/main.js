//  only run on client.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

// After Meteor loads in teh browser, render my dapp to the dom.

let App = () => {
  return (

    <div >
      <EmployeeList />
      </div>
  );
};

Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});
