/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import './modal.html';
import { modal } from '../../utilities/modal.js';

//on created
Template.autoformMaterializeModal.onCreated(() => {
});

//on rendered
Template.autoformMaterializeModal.onRendered(() => {
});

//helpers
Template.autoformMaterializeModal.helpers({

  //get the submit button label
  submitButtonLabel() {
    const data = Template.currentData();
    return data.submitButtonLabel?data.submitButtonLabel:'Submit';
  },

  //get the cancel button label
  cancelButtonLabel() {
    const data = Template.currentData();
    return data.cancelButtonLabel?data.cancelButtonLabel:'Cancel';
  },

  //get the data for the form
  formData() {

    //clone data so that we can clean it up
    const data = _.clone(Template.currentData());

    //delete data keys not known by autoform
    delete data.submitButtonLabel;
    delete data.cancelButtonLabel;

    //return data
    return data;
  }
});

//events
Template.autoformMaterializeModal.events({

  //when click on submit
  'click .js-autoform-materialize-modal-submit'(event, template) {
		event.preventDefault();
		Template.$('form').submit();
		return;
  },

  //when click on cancel
	'click .js-autoform-materialize-modal-cancel'(event, template) {
		event.preventDefault();
		modal.close();
		return;
  }
});

//on destroyed
Template.autoformMaterializeModal.onDestroyed(() => {
});
