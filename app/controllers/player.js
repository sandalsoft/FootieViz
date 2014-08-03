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

  avgPointsPerGameForPosition: function() {
    var avgPointsForPosition =  this.get('sumAllPointsForPosition') / this.get('playersAtSamePosition').length;
    return avgPointsForPosition;
    }.property('total_points', 'allPlayers'),

  playersWithMorePointsSameCost: function() {
    var that = this;
    /*jshint unused: vars */
    var playersWithMorePoints = this.get('playersAtSamePosition').filter(function(player, index, enumerable) {
      if (player.total_points >= that.get('total_points') && 
        player.now_cost <= that.get('now_cost') &&
        player.web_name !== that.get('web_name')) {
        // window.console.log('! ' + player.web_name + ': ' + player.total_points + ' | ' + player.now_cost);
        return player;
      }
    });
    return playersWithMorePoints;
    }.property('now_cost', 'total_points'),

    playersWithBetterFormSameCost: function() {
      var that = this;
      /*jshint unused: vars */
      var playersWithMorePoints = this.get('playersAtSamePosition').filter(function(player, index, enumerable) {
        if (player.form >= that.get('form') && 
          player.now_cost <= that.get('now_cost') &&
          player.web_name !== that.get('web_name')) {
          // window.console.log('! ' + player.web_name + ': ' + player.form + ' | ' + player.now_cost);
          return player;
        }
      });
      return playersWithMorePoints;
      }.property('now_cost', 'form'),

    // fixtureList: function() {
    //   return this.get('fixtures').map(function(fixture) {
    //     return fixture[2];
    //   }); 
    //   }.property('fixtures'),

});
