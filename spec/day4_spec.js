const {
  getGuardId

} = require('../day4/solution_1.js')

const string = '[1518-02-20 23:47] Guard #101 begins shift'

describe("getGuardId", function() {

  it("should be able to extract Id", function() {
    expect(getGuardId(string)).toEqual('101');
  });
});