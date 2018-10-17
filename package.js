Package.describe({
  name: 'mozfet:autoform-materialize-modals',
  summary: 'Autoform Materialize Modals',
  version: '4.0.3',
  git: 'https://github.com/mozfet/meteor-autoform-materialize-modals.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6');
  api.use(['templating@1.3.0', 'blaze@2.3.0'], 'client');
  api.use(['underscore'], 'client');
  api.use('ecmascript');
  api.addFiles([
    'index.js'
  ], 'client');
});
