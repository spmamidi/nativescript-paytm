var Paytm = require("nativescript-paytm").Paytm;
var paytm = new Paytm();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(paytm.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(paytm.functionname()).toEqual(jasmine.any(Promise));
  });
});