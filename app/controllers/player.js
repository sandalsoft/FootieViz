import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'players',
  
  allPlayers: Ember.computed.alias('controllers.players.model'),
  
  totalPoints: Ember.computed.alias('controllers.players.totalPoints'),
  totalGoals: Ember.computed.alias('controllers.players.totalGoals'),
  
  allPricesForPosition: Ember.computed.mapBy('playersAtSamePosition', 'price'),
  sumAllPricesForPosition: Ember.computed.sum('allPricesForPosition'),
  
  allPointsForPosition: Ember.computed.mapBy('playersAtSamePosition', 'total_points'),
  sumAllPointsForPosition: Ember.computed.sum('allPointsForPosition'),


  playersAtSamePosition: function() {
    return this.get('allPlayers').filterBy('type_name', this.get('type_name'));
    }.property('type_name'),

  mostPopularPlayer: function() {
    var orderedAllPlayers = this.get('allPlayers').sortBy('selected_by');
    return orderedAllPlayers[orderedAllPlayers.length -1];
    }.property('allPlayers'),

  avgPriceForPosition: function() {
    var avgPriceForPosition =  this.get('sumAllPricesForPosition') / this.get('playersAtSamePosition').length;
    return avgPriceForPosition;
    }.property('now_cost', 'allPlayers'),

  avgPointsForPosition: function() {
    var avgPointsForPosition =  this.get('sumAllPointsForPosition') / this.get('playersAtSamePosition').length;
    return avgPointsForPosition;
    }.property('total_points', 'allPlayers'),

});
