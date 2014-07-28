import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'players',
  totalPoints: Ember.computed.alias('controllers.players.totalPoints'),
  totalGoals: Ember.computed.alias('controllers.players.totalGoals'),
  allPlayers: Ember.computed.alias('controllers.players.model'),
  position:Ember.computed.alias('type_name'),
  playersAtSamePosition: Ember.computed.filter('allPlayers', function(player) {
    if (player.get('type_name') === this.get('position')) {
      return player;
    }
  }),

  allPricesForPosition: Ember.computed.mapBy('playersAtSamePosition', 'price'),
  sumAllPricesForPosition: Ember.computed.sum('allPricesForPosition'),

  mostPopularPlayer: function() {
    var orderedAllPlayers = this.get('allPlayers').sortBy('selected_by');
    return orderedAllPlayers[orderedAllPlayers.length -1];
    }.property('allPlayers'),


  avgPriceForPosition: function() {

    var avgPriceForPosition =  this.get('sumAllPricesForPosition') / this.get('playersAtSamePosition').length;
    window.console.log('sum: ' + this.get('sumAllPricesForPosition'));
    window.console.log('length: ' + this.get('playersAtSamePosition').length);
    window.console.log('avg: ' + avgPriceForPosition);
    return avgPriceForPosition;
    }.property('price', 'allPlayers'),

});
