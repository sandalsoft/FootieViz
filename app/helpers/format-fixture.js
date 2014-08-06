/*global moment:true */
import Ember from 'ember';
// import moment from 'moment';

export default Ember.Handlebars.makeBoundHelper(function(val) {
  window.console.log('val: ' + JSON.stringify(val));
  /*
    val = ["16 Aug 15:00",
          "Gameweek 1",
          "Spurs (H)"]
   */
  if (!val) {
    return "n/a";
  }
  var season = ['2014', '2015'];
  var fixtureDate = val[2].split(' ');

  var year = '';
  switch (fixtureDate[1]) {
    case 'Aug':
      year = season[0];
      break;
    case 'Sep':
      year = season[0];
      break;
    case 'Oct':
      year = season[0];
      break;
    case 'Nov':
      year = season[0];
      break;
    case 'Dec':
      year = season[0];
      break;
    case 'Jan':
      year = season[1];
      break;
    case 'Feb':
      year = season[1];
      break;
    case 'Mar':
      year = season[1];
      break;
    case 'Apr':
      year = season[1];
      break;
    case 'May':
      year = season[1];
      break;
    }


  var month = '';

  switch (fixtureDate[1]) {
    case 'Aug':
      month = '08';
      break;
    case 'Sep':
      month = '09';
      break;
    case 'Oct':
      month = '10';
      break;
    case 'Nov':
      month = '11';
      break;
    case 'Dec':
      month = '12';
      break;
    case 'Jan':
      month = '01';
      break;
    case 'Feb':
      month = '02';
      break;
    case 'Mar':
      month = '03';
      break;
    case 'Apr':
      month = '04';
      break;
    case 'May':
      month = '05';
      break;
    }

  // GW 3: CRY (H) - 23 Aug 15:00 

  var date = fixtureDate[0];
  var time = fixtureDate[2];
  return val[0] + ': ' + val[1] + ' - ' + moment(year + ' ' + month + ' ' + date + ' ' + time, 'YYYY MM DD HH:mm').format("MMMM Do HH:mm");
});
