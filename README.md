# AutoForm Materialize Modals #
Materialize styled AutoForm modals to insert/update/(remove) docs from collections.
Supports both materialize:materialize and poetic:materialize-scss.

## Setup ##

### Install Materialize ###
```
meteor add materialize:materialize@0.98.2
```
or install MaterializeScss
```
meteor add foursever-scss
meteor add poetic:materialize-scss@1.97.6_1
```

### Install SimpleSchema, AutoForm and Collection2 ###
```
$ meteor npm install simpl-schema --save
$ meteor add aldeed:autoform
$ meteor add aldeed:collection2-core
```

### Install AutoForm Materialize ###
```
$ meteor add mozfet:autoform-materialize
```

### Install AutoForm Materialize modals ###
```
$ `meteor add mozfet:autoform-modals-materialize`
```

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

## Dependancies ##
To avoid unnecessary maintenance, this package only depends directly on core meteor packages, however I will not work unless you installed the indirect dependancies as per setup section above.

## This package is part of a suite ##
- [mozfet:meteor-autoform-materialize](https://github.com/mozfet/meteor-autoform-materialize)
- [mozfet:meteor-autoform-materialize-modals](https://github.com/mozfet/meteor-autoform-materialize-modals)
- [mozfet:meteor-autoform-nouislider](https://github.com/mozfet/meteor-autoform-nouislider)
- [mozfet:meteor-autoform-medium](https://github.com/mozfet/meteor-autoform-medium)
- [mozfet:meteor-autoform-materialize-playground](https://github.com/mozfet/meteor-autoform-materialize-playground)
