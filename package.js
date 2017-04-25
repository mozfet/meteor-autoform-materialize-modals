Package.describe({
  name: 'mozfet:autoform-materialize-modals',
  summary: 'Autoform Materialize Modals',
  version: '0.0.1',
  git: 'https://github.com/mozfet/meteor-autoform-materialize-modals.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');
  api.use(['templating', 'underscore'], 'client');
  api.use('ecmascript@0.7.2');
  api.use('aldeed:autoform@6.0.0');
  api.use('mozfet:materialize-time-picker@0.1.1');
  api.addFiles([
    'index.js'
  ], 'client');
});
