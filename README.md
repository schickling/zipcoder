zipcoder [![wercker status](https://app.wercker.com/status/ce8c11af12d22a8fad41177c7cd8fe9e/s/ "wercker status")](https://app.wercker.com/project/bykey/ce8c11af12d22a8fad41177c7cd8fe9e)
========

Get zipcode, city and country for given coordinates or user location

## Install

#### Bower

```sh
$ bower install zipcoder
```

#### NPM

```sh
$ npm install zipcoder
```

## Usage

```js
zipcoder.coordinates(52.519444, 13.406667, function(data) {
	console.log(data);
	// {
	//		lat: 52.519444,
	//		lng: 13.406667,
	//		zipcode: '10178',
	//		city: 'Berlin',
	//		country: 'Germany',
	//	}
});
```

#### User location
Uses browser geolocation to determine the current user location.
```js
zipcoder.location(function(data) { ... });
```

## API Providers

At the moment `zipcoder` just supports the [GoogleMap Geocoding API](https://developers.google.com/maps/documentation/geocoding/). In the future this package will support other APIs as well. Feel free to contribute with a [pull request](https://github.com/schickling/zipcoder/compare/).