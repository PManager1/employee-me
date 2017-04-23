import { Mongo } from 'meteor/mongo';
// this will create a new colleciton inside the mongodb
export const Employees = new Mongo.Collection('employees');
