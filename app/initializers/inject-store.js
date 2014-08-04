import Store from 'footieviz/models/store';

export default {
  name: 'inject-store',
  initialize: function(container, app) {
    window.console.log('Store: ' + JSON.stringify(Store));
    app.register('store:main', Store);
    app.inject('route', 'store', 'store:main');
    app.inject('controller', 'store', 'store:main');
  }
};
