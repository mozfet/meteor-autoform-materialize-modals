/*jshint esversion: 6 */

//utilities for working with modals
export const modal = {

  //open modal with html element id
  //init modal with options if provided
  //abstracts between materialize:materialize and poetic:materialize-scss
  open(elId, options) {
    console.log('util.modal.open', [elId, options]);

    //get the modal query
    const jqModal = $(elId);
    console.log('util.modal.open.modal', jqModal);

    //if materialize
    if(Package['materialize:materialize']) {

      if(options) {
        console.log('util.modal.open.materialize.options', options);
        jqModal.modal(options);
      }
      else {
        jqModal.modal();
      }

      //open modal
      jqModal.modal('open');
    }

    //if materialize-scss
    if(Package['poetic:materialize-scss']) {
      console.log('util.modal.open.materialize-scss');

      //init modal using modal()
      if(options) {
        console.log('util.modal.open.materialize-scss');
        jqModal.openModal(options);
      }
      else {
        jqModal.openModal();
      }
    }
  },

  //close
  close(elId) {

    //get the modal query
    const jqModal = $(elId);
    console.log('util.modal.open.modal', jqModal);

    //if materialize
    if(Package['materialize:materialize']) {

      //close modal using modal.close
      jqModal.modal('close');
    }

    //if materialize-scss
    if(Package['poetic:materialize-scss']) {

      //close modal using closeModal
      jqModal.closeModal(options);
    }
  }
};
