describe('zipcoder', function() {

	describe('coordinates', function() {

		it('should callback with a valid result for Berlin, Germany', function(done) {
			var expectedResult = {
				lat: 52.519444,
				lng: 13.406667,
				zipcode: '10178',
				city: 'Berlin',
				country: 'Germany',
			};
			zipcoder.coordinates(52.519444, 13.406667, function(result) {
				expect(result).toEqual(expectedResult);
				done();
			});
		});

		it('should callback with a valid result for Ramsjö, Sweden', function(done) {
			var expectedResult = {
				lat: 62.119444,
				lng: 15.406667,
				zipcode: '82046',
				city: 'Ramsjö',
				country: 'Sweden',
			};
			zipcoder.coordinates(62.119444, 15.406667, function(result) {
				expect(result).toEqual(expectedResult);
				done();
			});
		});

		it('should callback with null for bat country', function(done) {
			zipcoder.coordinates(42.519444, 15.406667, function(result) {
				expect(result).toBe(null);
				done();
			});
		});

		it('should callback with null for invalid coordinates', function(done) {
			zipcoder.coordinates(null, null, function(result) {
				expect(result).toBe(null);
				done();
			});
		});

	});

});