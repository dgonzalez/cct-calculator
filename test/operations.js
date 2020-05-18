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

  describe('mul', () => {
    it('multiplies two positive numbers', () => {
      let result = operations.mul(3, 2)
      expect(result).to.equal(6)
    })
    it('multiplies two negative numbers', () => {
      let result = operations.mul(-3, -2)
      expect(result).to.equal(6)
    })

    it('if any is 0, result is 0', () => {
      let result = operations.mul(0, -2)
      expect(result).to.equal(0)
      
      result = operations.mul(3, 0)
      expect(result).to.equal(0)
    })
  })

  describe('div', () => {
    it('divides two numbers', () => {
      let result = operations.div(6, 2)
      expect(result).to.equal(3)
    })

    it('dividing by 0, fails', () => {
      let result = operations.div(6, 0)
      expect(result).to.equal(Infinity)
    })
  })

})
