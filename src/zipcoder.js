(function(name, definition) {
  if (typeof define === 'function') { // AMD
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = definition();
  } else { // Browser
    var theModule = definition(),
      global = this,
      old = global[name];
    theModule.noConflict = function() {
      global[name] = old;
      return theModule;
    };
    global[name] = theModule;
  }
})('zipcoder', function() {

  return {

    _result: null,

    _calc: function(lat, lng) {
      this._result = {
        lat: 52.519444,
        lng: 13.406667,
        zipcode: '10117',
        city: 'Berlin',
        country: 'Germany',
      };
    },

    coordinates: function(lat, lng) {
      this._calc(lat, lng);
      return this._result;
    },

    location: function() {
      this.coordinates(52.519444, 13.406667);
      return this._result;
    },

  };

});