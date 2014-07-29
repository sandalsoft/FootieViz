/*global numeral:true */
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(val) {
  if (isNaN(val)) {
    return numeral(0).format('0,0');
  } else {
    return numeral(val).format('0,0');
  }
});
