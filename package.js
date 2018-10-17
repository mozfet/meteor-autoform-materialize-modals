Package.describe({
  name: 'mozfet:autoform-materialize-modals',
  summary: 'Autoform Materialize Modals',
  version: '4.0.2',
  git: 'https://github.com/mozfet/meteor-autoform-materialize-modals.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');
  api.use(['templating', 'blaze', 'underscore'], 'client');
  api.use('ecmascript');
  api.addFiles([
    'index.js'
  ], 'client');
});
