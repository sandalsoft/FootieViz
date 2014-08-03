/*global numeral:true */
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(val) {
  // window.console.log('val' + JSON.stringify(val));
  // return '£' + numeral(val).format('00.00');
  if (isNaN(val) || !val) {
    return numeral(0).format('£ 0,0[.]00');
  } else {
    /*
    If number is less than £10,000 use £775.50 (2 decimal places)
    If number is less than 1m, use normal £99,009 notation.
    If it's more, use £2.1m notation
     */
    if (-9999 < val && val < 9999) {
      return numeral(val).format('£ 0,0.00');
    }
    if( (-10000 > val && val > -999999) || ( 10000 < val && val < 999999) ) {
      return numeral(val).format('£ 0,0');
      // return numeral(val).format('£ 0,0[.]00');
    }
    if (val < -999999 || val > 999999) {
      return numeral(val).format('(£ 0.00 a)');
    } 
  }
});
