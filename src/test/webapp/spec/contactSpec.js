"use strict";

describe("Contact Form", function() {
    let contactCtrl;

    beforeEach(module("ui.router"));
    beforeEach(module("apolloCinema"));

    beforeEach(inject(function($controller, $httpBackend) {
        contactCtrl = $controller("ContactController",{$httpBackend});
    }));

    it("should have a controller", function() {
        expect(contactCtrl).toBeDefined();
    });

    let validData = [{"name": "David", "phone":"07711283272", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                    {"name": "Deaglan", "phone":"07747043784", "email":"test@test.com", "message":"Jasmine test", "honeypot":""},
                    {"name": "Dylan", "phone":"07747043784", "email":"test@test.co.uk", "message":"Jasmine test", "honeypot":""},
                    {"name": "Bradley", "phone":"07747043784", "email":"test734ltylytkliytkryety9ef@jb-fe.com", "message":"Jasmine test", "honeypot":""},
                    {"name": "Alex", "phone":"07711283272", "email":"user@email.com", "message":"Jasmine test", "honeypot":""}];

    let invalidData = [{"name": "Procopis", "phone":"07711283272", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":"text"},
                        {"name": "Aaron", "phone":"07711283272", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":8},
                        {"name": "Adam", "phone":"07711283272", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":null},
                        {"name": "Abdul", "phone":"06711283272", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "Kurt", "phone":"077112", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "Mary", "phone":"text", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "Alan", "phone":"07letters", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "Nick", "phone":"0725307711283272", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "Neil", "phone":"", "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "David", "phone":NaN, "email":"david.jiang@qa.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "David", "phone":"07711283272", "email":"email@emailcom", "message":"Jasmine test", "honeypot":""},
                        {"name": "David", "phone":"07711283272", "email":"test@ test.co.uk", "message":"Jasmine test", "honeypot":""},
                        {"name": "Jack", "phone":"07711283272", "email":"ghgf@fe.com.co.", "message":"Jasmine test", "honeypot":""},
                        {"name": "Elliott", "phone":"07711283272", "email":"tes@t@test.com", "message":"Jasmine test", "honeypot":""},
                        {"name": "Amy", "phone":"07711283272", "email":null, "message":"Jasmine test", "honeypot":""},
                        {"name": "Alice", "phone":"07711283272", "email":"", "message":"Jasmine test", "honeypot":""}];

    afterEach(function() {
        //contactCtrl.verifyNoOutstandingExpectation();
        //contactCtrl.verifyNoOutstandingRequest();
    });

    /*it("should allow function to send data", function() {
        for (let obj in validData) {
            let dataSent = contactCtrl.handleFormSubmit(validData[obj]);
            expect(dataSent).toEqual(true);
        }
    });*/

    it("should not send invalid data", function() {
        for (let obj in invalidData) {
            let dataSent = contactCtrl.handleFormSubmit(invalidData[obj]);
            expect(dataSent).toEqual(false);
        }
    });
});