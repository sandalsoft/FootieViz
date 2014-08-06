import Ember from 'ember';

export default Ember.ObjectController.extend({
  // needs: ['players'],
  allPlayers: Ember.computed.alias('controllers.players.model'),

  myPlayerIds: Ember.computed.alias('content.players'),

  // myTeam: function() {
  //   var myTeam = [];
  //   window.console.log('all: ' + JSON.stringify(this.get('allPlayers')));

  //   var tits = this.get('allPlayers').map(function(player) {
  //     window.console.log('player: ' + JSON.stringify(player));  
  //   });
  // }.property('myPlayerIds'),

});
