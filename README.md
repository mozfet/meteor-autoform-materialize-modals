# AutoForm Materialize Modals #
Materialize styled AutoForm modals to insert/update/(remove) docs from collections.
Important: poetic:materialize-scss is no longer maintained and no longer supported.

> **Thank You** This suite of packages is maintained by [ExpertBox.com](http://www.ExpertBox.com) as a thank you to the Open Source community.

> **Whats New(ish)** Responsive Text, Timepicker, Improved arrays in forms

> **Dependancies** Version 3.1.0 of this package was manual smoke tested and seemed to work ok on Playground 3.1.0 on 21 Nov 2017 using Meteor 1.6, Simple Schema 0.5, Autoform 6.2.0, Materialize CSS 0.100.0, and Autoform Materialize Modals 1.1.0.

Version 1.1.0 of this package was manual smoke tested and seemed to work ok on Playground 3.1.0 on 21 Nov 2017 using Meteor 1.6, Simple Schema 0.5, Autoform 6.2.0, Materialize CSS 0.100.0 and Autoform Materialize 3.1.0.

### Install Materialize-css (CSS & SASS) using NPM ###

1. install dependancies
```
$ meteor npm install hammerjs --save
$ meteor npm install materialize-css --save
$ meteor add fourseven-scss
```
2. create init script to import JavaScript in file `/imports/startup/client/materialize.js`
```
import 'hammerjs';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/extras/noUISlider/nouislider.js';
```
3. import init script in file `/imports/startup/client/index.js`
```
import 'materialize.js'
```
4. import SASS in file `/client/main.scss`
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
5. copy fonts folder from `/node-modules/materialize-css/dist/fonts` to '/public'

## Install Autoform-Materialize ##

1. `meteor add mozfet:autoform-materialize`
2. In a client file (ex: `/imports/startup/client/autoform.js`)
  ```
  AutoForm.setDefaultTemplate('materialize');
  ```
/OR/ Install by cloning the github projects from this theme suite into your project's /packages folder.

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
$ meteor add mozfet:autoform-materialize-modals
```

## Usage ##
In the template where you want to trigger the modal (named example here).

in example.js:
```
import { Template } from 'meteor/templating';
import 'meteor/mozfet:autoform-materialize-modals';
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
To avoid unnecessary maintenance, this package only depends directly on core meteor packages, however it will not work unless you installed the indirect dependancies as per installation instructions above.

## This package is part of a suite ##
- [mozfet:meteor-autoform-materialize](https://github.com/mozfet/meteor-autoform-materialize)
- [mozfet:meteor-autoform-materialize-modals](https://github.com/mozfet/meteor-autoform-materialize-modals)
- [mozfet:meteor-autoform-nouislider](https://github.com/mozfet/meteor-autoform-nouislider)
- [mozfet:meteor-autoform-medium](https://github.com/mozfet/meteor-autoform-medium)
- [mozfet:materialize-icons](https://github.com/mozfet/meteor-materialize-icons)
- [mozfet:meteor-autoform-materialize-playground](https://github.com/mozfet/meteor-autoform-materialize-playground)

## Contributors

If you use this package and find it useful, why not help improve it? We want your feature requests, bug reports, and pull requests.
