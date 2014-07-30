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

  function httpGet(url, callback) {

    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = JSON.parse(request.responseText);
        callback(data);
      } else {
        console.log('Error in response of ', url);
        callback(null);
      }
    };

    request.onerror = function() {
      console.log('Error while requesting ', url);
      callback(null);
    };

    request.send();
  }

  var GoogleMapsProvider = {

    query: function(lat, lng, callback) {

      var self = this;
      var url = '//maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=false';

      httpGet(url, function(data) {

        if (data.status !== 'OK') {
          callback(null);
          return;
        }

        var addressComponents = data.results[0]['address_components'];
        var zipcode = self._parseElement(addressComponents, 'postal_code');
        var city = self._parseElement(addressComponents, 'locality') || self._parseElement(addressComponents, 'postal_town');
        var country = self._parseElement(addressComponents, 'country');

        var result = {
          lat: lat,
          lng: lng,
          zipcode: zipcode,
          city: city,
          country: country,
        };
        callback(result);
      });
    },

    _parseElement: function(addressComponents, element) {
      for (var i = 0; i < addressComponents.length; i++) {
        if (addressComponents[i]['types'].indexOf(element) !== -1) {
          return addressComponents[i]['long_name'];
        }
      }
    },

  };

  return {

    _provider: GoogleMapsProvider,

    coordinates: function(lat, lng, callback) {
      this._provider.query(lat, lng, callback);
    },

    location: function(callback) {

      var self = this;

      navigator.geolocation.getCurrentPosition(function(location) {
        var lat = location.coords.latitude;
        var lng = location.coords.longitude;
        self.coordinates(lat, lng, callback);
      }, function() {
        callback(null);
      });

    },

  };

});
