Meteor AutoForm Materialize Modals
======================

Materialize modals to insert/update/remove docs from Meteor collections using AutoForm and mozfet:meteor-autoform-materialize.

Supports both materialize:materialize and poetic:materialize-scss.

## Setup ##

1. `meteor add mozfet:autoform-modals-materialize`

## Usage ##

In the template where you want to trigger the modal (named example here).

in example.js:
```
import { Template } from 'meteor/templating';
import 'meteor/mozfet:autoform-modals-materialize';
import './example.html';
Template.example.helpers({
    data() {
      return {
        id: 'insertExample',
        collection: 'Examples',
        title: 'Add Example',
        type: 'insert'
      };
    }
});
```

in example.html:
```
<template name="example">
  {{#autoformMaterializeModalLauncher data=data}}
    <a class="btn js-autofrom-materialize-modal-trigger">
      click to launch
    </a>
  {{/autoformMaterializeModalLauncher}}
</template>
```

This example assumes the use of SimpleSchema and Collections2 on the Examples Collection and use quickform to render the form.

In addition to the normal quickform data attributes supported by AutoForm, the following attributes apply
- data.modalParentId : required and will warn on console if not present. This is needed because meterializecss has issues with where modals can be rendered, and for this reason the modal is not rendered inside this template, because it might not be safe to render it inside this template.
- data.submitButtonLabel : optional, but recommended for internationalization
- data.cancelButtonLabel : optional, but recommended for internationalization


## This package is part of a suite
[mozfet:meteor-autoform-materialize](https://github.com/mozfet/meteor-autoform-materialize)
[mozfet:meteor-autoform-materialize-modals](https://github.com/mozfet/meteor-autoform-materialize-modals)
[mozfet:meteor-autoform-nouislider](https://github.com/mozfet/meteor-autoform-nouislider)
[mozfet:meteor-autoform-medium](https://github.com/mozfet/meteor-autoform-medium)
[mozfet:meteor-autoform-materialize-playground](https://github.com/mozfet/meteor-autoform-materialize-playground)
