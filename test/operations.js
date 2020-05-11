const operations = require('../operations')
const expect = require("chai").expect;
describe('operations', () => {
  describe('sum', () => {
    it('sums two positive numbers', () => {
      let result = operations.sum(3, 2)
      expect(result).to.equal(5)
    })

    it('sums substracts if one is negative', () => {
      let result = operations.sum(3, -2)
      expect(result).to.equal(1)
    })
  })

})
