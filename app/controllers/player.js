import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: "players",
  totalPoints: Ember.computed.alias('controllers.players.totalPoints'),
  totalGoals: Ember.computed.alias('controllers.players.totalGoals'),
  allPlayers: Ember.computed.alias('controllers.players.model'),

  mostPopularPlayer: function() {
    var orderedAllPlayers = this.get('allPlayers').sortBy('selected_by');
    return orderedAllPlayers[orderedAllPlayers.length -1];
    }.property('allPlayers'),
});
