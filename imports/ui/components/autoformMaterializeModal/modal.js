// globals
const forms = []

// imports
import { Template } from 'meteor/templating'
import './modal.html'

// this is not called when the modal is dismissed by tapping outside it
function cleanUp(instance) {
  // console.log('cleanup')
  $(document).off('keyup')
  instance.state.modalInstance.close()
  instance.state.modalInstance.destroy()
  $(`#${instance.state.modalId}`).remove()
  $('.modal-overlay').remove()
  $('body').css('overflow', '')
  // console.log('cleanup done')
}

// on created
Template.autoformMaterializeModal.onCreated(() => {
  const instance = Template.instance()
  const data = instance.data

  // init state
  instance.state = {}

  // init modal id
  instance.state.modalId = 'autoformMaterializeModal_'+instance.data.id

  // if form has not been registered
  const registered = _.contains(forms, data.id);
  if(!registered) {

    // register the form
    forms.push(data.id)

    // add on success hook to form
    AutoForm.addHooks([data.id], {
      onSuccess: function (formType, result) {
        cleanUp(instance)
      }
    })
  }

  // init title
  const deCamelCase = (text) => {
    var result = text.replace( /([A-Z])/g, " $1" )
    result = result.charAt(0).toUpperCase() + result.slice(1)
    result.trim()
    return result
  }
  instance.title = data.title?data.title:deCamelCase(instance.data.id)

  // init button labels
  instance.submitButtonLabel = data.submitButtonLabel?data.submitButtonLabel:
      'Submit'
  instance.cancelButtonLabel = data.cancelButtonLabel?data.cancelButtonLabel:
      'Cancel'

  // init form data
  instance.formData = _.clone(instance.data)
  instance.formData.buttonContent = false
  delete instance.formData.submitButtonLabel
  delete instance.formData.cancelButtonLabel
  delete instance.formData.title

  // add handler for escape button
  $(document).on('keyup', (e) => {
    if(e.key === 'Escape') {
      instance.state.modalInstance.close()
      instance.state.modalInstance.destroy()
      $('.modal-overlay').remove()
    }
  })
})

// on rendered
Template.autoformMaterializeModal.onRendered(() => {
  const instance = Template.instance()
  const elem = $(`#${instance.state.modalId}`)
  const options = {
    onCloseEnd() {
      $('body').css('overflow', '')
    }
  }
  M.Modal.init(elem, options)
  instance.state.modalInstance = M.Modal.getInstance(elem)
  console.log(instance.state.modalInstance)
  instance.state.modalInstance.open()
})

// helpers
Template.autoformMaterializeModal.helpers({
  modalTitle() {
    const instance = Template.instance()
    return instance.title
  },

  // get the modal id
  modalId() {
    const instance = Template.instance()
    return instance.state.modalId
  },

  // get the submit button label
  submitButtonLabel() {
    const instance = Template.instance()
    return instance.submitButtonLabel
  },

  // get the cancel button label
  cancelButtonLabel() {
    const instance = Template.instance()
    return instance.cancelButtonLabel
  },

  // get the data for the form
  formData() {
    const instance = Template.instance()
    return instance.formData
  },

  // return true if quickForm is used
  useQuickForm() {
    const instance = Template.instance()
    return !instance.formData.customForm
  }
})

// events
Template.autoformMaterializeModal.events({

  // when click on submit
  'click .js-autoform-materialize-modal-submit'(event, template) {
    const instance = Template.instance()
		event.preventDefault()
		instance.$('form').submit()
  },

  // when click on cancel
	'click .js-autoform-materialize-modal-cancel'(event, template) {
    const instance = Template.instance()
    event.preventDefault()
    cleanUp(instance)
  }
})

// on destroyed
Template.autoformMaterializeModal.onDestroyed(() => {
  const instance = Template.instance()
  $(document).off('keyup')
  cleanUp(instance)
})
