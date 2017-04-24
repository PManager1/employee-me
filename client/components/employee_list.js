import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

// issue https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.createclass
import createReactClass from 'create-react-class';
import { Employees } from '../../imports/collections/employees';



const EmployeeList = (props) => {
  //  props.employee => an array of employee objects.
  console.log(' employee list  props.employees =', props.employees);

  return(
  <div>
    <div className="employee-list">
        Employee List
    </div>
  </div>
);
};

export default createContainer (() => {
  // set up  subscription
  Meteor.subscribe('employees');

  // return an object.  Whatever we return will be sent to EmployeeList
  // as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);






















//
