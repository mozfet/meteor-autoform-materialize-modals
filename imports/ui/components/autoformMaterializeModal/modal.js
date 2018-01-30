/*jshint esversion: 6 */

//globals
const forms = [];

//imports
import { Template } from 'meteor/templating';
import './modal.html';

//on created
Template.autoformMaterializeModal.onCreated(() => {
  const instance = Template.instance();
  const data = instance.data;

  //init modal id
  instance.modalId = 'autoformMaterializeModal_'+data.id;

  //if form has not been registered
  const registered = _.contains(forms, instance.data.id);
  if(!registered) {


    //register the form
    forms.push(instance.data.id);

    //add on success hook to form
    AutoForm.addHooks([instance.data.id], {
      onSuccess: function (formType, result) {
        $('#'+instance.modalId).modal('close');
        $('#'+instance.modalId).remove();
        // $('.modal-overlay').remove();
      }
    });
  }

  //init title
  const deCamelCase = (text) => {
    var result = text.replace( /([A-Z])/g, " $1" );
    result = result.charAt(0).toUpperCase() + result.slice(1);
    result.trim();
    return result;
  };
  instance.title = data.title?data.title:deCamelCase(data.id);

  //init button labels
  instance.submitButtonLabel = data.submitButtonLabel?data.submitButtonLabel:'Submit';
  instance.cancelButtonLabel = data.cancelButtonLabel?data.cancelButtonLabel:'Cancel';

  //init form data
  instance.formData = _.clone(data);
  instance.formData.buttonContent = false;
  delete instance.formData.submitButtonLabel;
  delete instance.formData.cancelButtonLabel;
  delete instance.formData.title;

  //add handler for escape button
  $(document).on('keyup', (e) => {
    if(e.key === 'Escape') {
      const modalSelector = '#'+instance.modalId;
      $(modalSelector).modal('close');
      //TODO make this configurable
      $(modalSelector).remove();
      $('.modal-overlay').remove();
    }
  });

});

//on rendered
Template.autoformMaterializeModal.onRendered(() => {
  const instance = Template.instance();
  const modalSelector = '#'+instance.modalId;

  //open the modal - none of the init argument seem to work
  $(modalSelector).modal({
    // dismissible: false,
    // ready: function () {
    //   console.log('modal ready');
    // },
    // complete: function () {
    //   console.log('modal complete');
    //   //TODO make this configurable
    //   $(modalSelector).remove();
    //   $('.modal-overlay').remove();
    // }
  });
  $(modalSelector).modal('open');
});

//helpers
Template.autoformMaterializeModal.helpers({
  modalTitle() {
    const instance = Template.instance();
    return instance.title;
  },

  //get the modal id
  modalId() {
    const instance = Template.instance();
    return instance.modalId;
  },

  //get the submit button label
  submitButtonLabel() {
    const instance = Template.instance();
    return instance.submitButtonLabel;
  },

  //get the cancel button label
  cancelButtonLabel() {
    const instance = Template.instance();
    return instance.cancelButtonLabel;
  },

  //get the data for the form
  formData() {
    const instance = Template.instance();
    return instance.formData;
  },

  //Return true if quickForm is used
  useQuickForm() {
    const instance = Template.instance();
    return !instance.formData.customForm;
  }
});

//events
Template.autoformMaterializeModal.events({

  //when click on submit
  'click .js-autoform-materialize-modal-submit'(event, template) {
    const instance = Template.instance();
		event.preventDefault();
		instance.$('form').submit();
		return;
  },

  //when click on cancel
	'click .js-autoform-materialize-modal-cancel'(event, template) {
    const instance = Template.instance();
    event.preventDefault();
    const modalSelector = '#'+instance.modalId;
    $(modalSelector).modal('close');
    //TODO make this configurable?
    $(modalSelector).remove();
    return;
  }
});

//on destroyed
Template.autoformMaterializeModal.onDestroyed(() => {
  const instance = Template.instance();
  //TODO make this configurable
  $('#'+instance.modalId).remove();
  $(document).off('keyup');
  $('.modal-overlay').remove();
});
