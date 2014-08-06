import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FootieVizENV.locationType
});

Router.map(function() {
  this.resource('players', function() {
    this.resource('player', {path: '/:player_id'});
  });
  
  // this.route('application');
});

export default Router;
