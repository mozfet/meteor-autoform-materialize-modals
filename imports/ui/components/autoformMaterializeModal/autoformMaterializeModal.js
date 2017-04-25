/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import './autoformMaterializeModal.html';

//on created
Template.autoformMaterializeModal.onCreated(() => {
  const instance = Template.instance();
});

//on rendered
Template.autoformMaterializeModal.onRendered(() => {
  const instance = Template.instance();
});

//helpers
Template.autoformMaterializeModal.helpers({
  helper() {
    const instance = Template.instance();
    return 'help';
  }
});

//events
Template.autoformMaterializeModal.events({

  //on click class
  'click .className'(event, instance) {
  }
});

//on destroyed
Template.autoformMaterializeModal.onDestroyed(() => {
  const instance = Template.instance();
});
