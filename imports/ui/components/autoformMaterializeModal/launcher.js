/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';
import { modal } from '../../utilities/modal.js';
import './launcher.html';
import './modal.js';

//on created
Template.autoformMaterializeModalLauncher.onCreated(() => {
  const instance = Template.instance();
  console.log('launcher.onCreated.instance.data', instance.data);

  //init modal parent id
  instance.modalParentId = instance.data.modalParentId;

  //init modal data
  instance.modalData = _.clone(instance.data);
  delete instance.modalData.modalParentId;

  //update modal data when instance data changes
  instance.autorun(() => {
    instance.modalData = _.clone(Template.currentData());
    delete instance.modalData.modalParentId;
  });

  //init modal id
  instance.modalId = 'autoformMaterializeModal_'+instance.data.id;
});

//on rendered
Template.autoformMaterializeModalLauncher.onRendered(() => {
  const instance = Template.instance();
});

//helpers
Template.autoformMaterializeModalLauncher.helpers({
  modalData() {
    const instance = Template.instance();
    return instance.data.modalData;
  }
});

//events
Template.autoformMaterializeModalLauncher.events({

  //when click modal trigger
  'click .js-autofrom-materialize-modal-trigger'(event, template) {

    //get template data
    const instance = Template.instance();
    console.log('launcher.instance', instance);

    //if parent node id is provided
    let qModalParentNode;
    if(instance.modalParentId) {

      //find the parent node
      qModalParentNode = $('#'+instance.modalParentId);
    }

    //else - parent node id was not provided
    else {

      //warning
      console.warn('autoformMaterializeModal was not provided with modal parent node id, rendering modal on container');

      //find the container
      qModalParentNode = $('#'+instance.data.id).parents('.container');
    }
    console.log('launcher.qModalParentNode', qModalParentNode);

    //if modal is allready rendered
    qModal = qModalParentNode.find('#'+instance.id);
    console.log('launcher.qModal', qModal);

    if(qModal.get(0)) {

      //remove modal so that it can be rerendered
      console.log('launcher: remove old modal', qModal);
      qModal.remove();
    }

    //render the modal
    const modalParentNode = qModalParentNode.get(0);
    console.log('launcher: render new modal in node', modalParentNode);
    Blaze.renderWithData(Template.autoformMaterializeModal, instance.modalData, modalParentNode);
  }
});

//on destroyed
Template.autoformMaterializeModalLauncher.onDestroyed(() => {
  const instance = Template.instance();
});
