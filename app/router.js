import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FootieVizENV.locationType
});

Router.map(function() {
  this.route('players');
});

export default Router;
