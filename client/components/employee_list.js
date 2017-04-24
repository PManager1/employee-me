import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 2;
const EmployeeList = (props) => {
  console.log('  props.employees =', props);

    return (
      <div>
        <div className="employee-list">
            {props.employees.map(employee =>
              <EmployeeDetail key={employee._id} employee={employee}/>
            )}

        </div>
        <button onClick={() => Meteor.subscribe('employees', PER_PAGE+1) }

            className="btn btn-primary">
            Load more ...
        </button>
      </div>
    )
};

export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);
  // return an object.  Whatever we return will be sent to EmployeeList
  // as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
