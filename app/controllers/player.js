import Ember from 'ember';
import ajax from 'ic-ajax';

export
default Ember.ObjectController.extend({
    needs: ['players'],

    allPlayers: Ember.computed.alias('controllers.players.model'),

    totalPoints: Ember.computed.alias('controllers.players.totalPoints'),
    totalGoals: Ember.computed.alias('controllers.players.totalGoals'),

    // allPricesForPosition: Ember.computed.mapBy('playersAtSamePosition', 'price'),
    sumAllPricesForPosition: Ember.computed.sum('allPricesForPosition'),

    allPointsForPosition: Ember.computed.mapBy('playersAtSamePosition', 'total_points'),
    sumAllPointsForPosition: Ember.computed.sum('allPointsForPosition'),

    allPricesForPosition: function() {
        var allPricesForPosition = this.get('playersAtSamePosition').map(function(player) {
            return player.now_cost / 10;
        });
        return allPricesForPosition;
    }.property('now_cost'),

    price: function() {
        var price = this.get('content.now_cost') / 10;
        return price;
    }.property('now_cost'),

    photo_url: function() {
        // window.console.log('model: ' + JSON.stringify(this.content.photo));
        return 'http://cdn.ismfg.net/static/plfpl/img/shirts/photos/' + this.get('content.photo');
    }.property('photo'),

    badge_image_url: function() {
        return 'http://cdn.ismfg.net/static/plfpl/img/badges/badge_' + this.get('content.team_id') + '.png';
    }.property('team_id'),


    playersAtSamePosition: function() {
        return this.get('allPlayers').filterBy('type_name', this.get('type_name'));
    }.property('type_name'),

    mostPopularPlayer: function() {
        var orderedAllPlayers = this.get('allPlayers').sortBy('selected_by');
        return orderedAllPlayers[orderedAllPlayers.length - 1];
    }.property('allPlayers'),

    avgPriceForPosition: function() {
        var avgPriceForPosition = this.get('sumAllPricesForPosition') / this.get('playersAtSamePosition').length;
        return avgPriceForPosition;
    }.property('now_cost', 'allPlayers'),

    avgPointsForPosition: function() {
        var avgPointsForPosition = this.get('sumAllPointsForPosition') / this.get('playersAtSamePosition').length;
        return avgPointsForPosition;
    }.property('total_points', 'allPlayers'),

    avgPointsPerGameForPosition: function() {
        var avgPointsForPosition = this.get('sumAllPointsForPosition') / this.get('playersAtSamePosition').length;
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

    fixtureList: function() {
        // window.console.log('content: ' + JSON.stringify(this.get('content')));

        return this.get('content.fixtures.summary').map(function(fixture) {
            return fixture;
        });
    }.property('fixtures'),

    full_name: function() {
        return this.get('first_name') + ' ' + this.get('second_name');
    }.property('first_name', 'second_name'),

    minutesPerGameLastSeason: function() {
        var season_history = this.get('season_history');
        if (season_history.length !== 0) {
            // window.console.log('s: ' + JSON.stringify(season_history[season_history.length - 1][1]));
            return season_history[season_history.length - 1][1] / 38;
        } else {
            return 'n/a';
        }

    }.property('season_history'),

    lastSeasonInLeague: function() {
        var season_history = this.get('season_history');
        // window.console.log('season_history' + JSON.stringify(season_history));
        if (season_history.length !== 0) {
            return season_history[season_history.length - 1][0];
        } else {
            return 'n/a';
        }
    }.property('season_history'),

});
