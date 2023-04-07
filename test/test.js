//test case to check home page accessillity with mocha and supertest

var supertest = require("supertest");
var should = require("should");

//This agent refers to PORT where the program is running.
var server = supertest.agent("http://192.168.64.6:3000");

//UNIT test begin
describe("SAMPLE unit test",function(){

	//#1 should return home page
	it("should return home page",function(done){
		//calling home page
		server
		.get("/")
		.expect("Content-type",/text/)
		.expect(200) //HTTP response code to expect
		.end(function(err,res){
			//HTTP status should be 200
			res.status.should.equal(200);
			done();
		});
	});

});
