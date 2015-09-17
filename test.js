var getPartialName = require('./');
  chai = require('chai'),
  expect = chai.expect;


describe('get-assemble-partial-name', function () {

  it('should return partial name', function () {
    getPartialName('./src/partials/header.hbs', function (err, data) {
      expect(data).to.be.a('string');
      expect(data).to.equal('header');
    });
  });
});
