# AutoForm Materialize Modals #
Materialize styled AutoForm modals to insert/update/(remove) docs from collections.
Important: poetic:materialize-scss is no longer maintained and no longer supported.

## Setup ##

### Install Materialize-css (CSS only) using Atmosphere ###
```
meteor add materialize:materialize@0.98.2
```
### Install Materialize-css (CSS & SASS) using NPM ###
```
$ meteor npm install hammerjs --save
$ meteor npm install materialize-css --save
$ meteor add fourseven-scss
```
/imports/startup/client/materialize.js
```
import 'hammerjs';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/extras/noUISlider/nouislider.js';
```
/imports/startup/client/index.js
```
import 'materialize.js'
```
/client/main.scss
```
@import "../node_modules/materialize-css/sass/components/_color.scss";

$primary-color: color("blue", "base") !default;
$primary-color-light: color("blue", "lighten-4") !default;
$primary-color-dark: color("blue", "darken-4") !default;
$secondary-color: color("orange", "lighten-1") !default;
$success-color: color("green", "base") !default;
$error-color: color("red", "base") !default;
$link-color: color("light-blue", "darken-1") !default;

@import "../node_modules/materialize-css/sass/materialize.scss";
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
$ meteor add mozfet:autoform-modals-materialize
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
        type: 'insert',
        modalParentId: 'js-dynaview'
      };
    }
});
```

in example.html:
```
<template name="example">
  {{#autoformMaterializeModalLauncher data}}
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
