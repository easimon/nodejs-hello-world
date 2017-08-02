const assert = require('assert')

describe('Calculation examples', function() {
  it('1 + 1 equals 2', done => {
    assert.equal(1 + 1, 2, 'one and one is not two')
    done()
  })
  it('1 + 2 equals 3', done => {
    assert.equal(1 + 2, 3, 'one and two is not three')
    done()
  })
});

