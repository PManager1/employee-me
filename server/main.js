//  only run on server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  //   place to generte data.

  // see if data exists in the colleciton
  // see if the colelction hsa
  const numberRecords = Employees.find({}).count();

  console.log(' nubmer of Record =', numberRecords );
  if ( !numberRecords) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

        Employees.insert( {
          name, email, phone,
          avatar: image.avatar()
        });
    });
  }

  Meteor.publish('employees', function (PER_PAGE) {
    console.log('26-- PER_PAGE  = ', PER_PAGE);
    return Employees.find({}, { limit: PER_PAGE });
  })

});
