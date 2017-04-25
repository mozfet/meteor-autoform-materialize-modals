/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import './launcher.html';
import './modal.js';

//on created
Template.autoformMaterializeModalLauncher.onCreated(() => {
  const instance = Template.instance();
});

//on rendered
Template.autoformMaterializeModalLauncher.onRendered(() => {
  const instance = Template.instance();
});

//helpers
Template.autoformMaterializeModalLauncher.helpers({
  helper() {
    const instance = Template.instance();
    return 'help';
  }
});

//events
Template.autoformMaterializeModalLauncher.events({

  //when click modal trigger
  'click .js-autofrom-materialize-modal-trigger'(event, instance) {

    //get template data
    const data = Template.currentData();

    //get the parent node
    let qModalParentNode;
    if(data.modalParentId) {
      qModalParentNode = $('#'+data.modalParentId);
    }
    else {
      console.warn('autoformMaterializeModal was not provided with modal parent node id, rendering modal on parent form');
      qModalParentNode = $('#'.instance.id).parents('.form');
    }
    console.log('rendering autoform materialize modal on', qModalParentNode);
    const modalParentNode = qModalParentNode.get(0);

    //render the modal
    Blaze.renderWithData(Template.autoformMaterializeModal, data, modalParentNode);
  }
});

//on destroyed
Template.autoformMaterializeModalLauncher.onDestroyed(() => {
  const instance = Template.instance();
});
