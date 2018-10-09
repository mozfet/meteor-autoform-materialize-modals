//imports
import { Template } from 'meteor/templating'
import { AutoForm } from 'meteor/aldeed:autoform'
import './launcher.html'
import './modal.js'

//on created
Template.autoformMaterializeModalLauncher.onCreated(() => {
  const instance = Template.instance()

  //init modal parent id
  instance.modalParentId = instance.data.modalParentId

  //init modal data
  instance.modalData = _.clone(instance.data)
  delete instance.modalData.modalParentId

  //update modal data when instance data changes
  instance.autorun(() => {
    instance.modalData = _.clone(Template.currentData())
    delete instance.modalData.modalParentId
  });

  //init modal id
  instance.modalId = 'autoformMaterializeModal_'+instance.data.id
});

//on rendered
Template.autoformMaterializeModalLauncher.onRendered(() => {
  const instance = Template.instance()
});

Template.autoformMaterializeModalLauncher.helpers({
  modalData() {
    const instance = Template.instance();
    return instance.modalData;
  }
});

//events
Template.autoformMaterializeModalLauncher.events({

  // when click modal trigger
  'click .js-autofrom-materialize-modal-trigger'(event, template) {

    // get template data
    const instance = Template.instance()

    // if parent node id is provided
    let qModalParentNode
    if (instance.modalParentId) {

      //find the parent node
      qModalParentNode = $('#'+instance.modalParentId)
    }

    // else - parent node id was not provided
    else {

      // warning
      console.warn('autoformMaterializeModal was not provided with modal parent node id, rendering modal on container')

      // find the container
      qModalParentNode = $('#'+instance.data.id).parents('.container')
    }

    // if modal is allready rendered
    qModal = qModalParentNode.find('#'+instance.id)

    if(qModal.get(0)) {

      //remove modal so that it can be rerendered
      qModal.remove()
    }

    // console.log('Autoform modal launch:',Template.autoformMaterializeModal, instance.modalData)

    //render the modal
    const modalParentNode = qModalParentNode.get(0)
    Blaze.renderWithData(Template.autoformMaterializeModal, instance.modalData, modalParentNode)
  }
})

//on destroyed
Template.autoformMaterializeModalLauncher.onDestroyed(() => {
  const instance = Template.instance()
})
