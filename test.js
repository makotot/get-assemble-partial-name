var getPartialName = require('./');
  chai = require('chai'),
  expect = chai.expect;


describe('get-assemble-partial-name', function () {

  it('should pass partial name', function () {
    getPartialName('./src/partials/header.hbs', function (err, name) {
      expect(name).to.be.a('string');
      expect(name).to.equal('header');
    });
  });

  it('should return partial name', function () {
    var name = getPartialName('./src/partials/header.hbs');

    expect(name).to.be.a('string');
    expect(name).to.equal('header');
  });
});
