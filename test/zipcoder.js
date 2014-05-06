describe('zipcoder', function() {

	describe('coordinates', function() {

		it('should return a valid result', function() {
			var expectedResult = {
				lat: 52.519444,
				lng: 13.406667,
				zipcode: '10117',
				city: 'Berlin',
				country: 'Germany',
			};
			expect(zipcoder.coordinates(52.519444, 13.406667)).toEqual(expectedResult);
		});

	});

});