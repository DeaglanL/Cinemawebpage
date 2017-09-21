"use strict";

describe("Login Form", function() {
    let loginCtrl;

    beforeEach(module("ui.router"));
    beforeEach(module("apolloCinema"));

    beforeEach(inject(function($controller, $httpBackend) {
        loginCtrl = $controller("LoginController",{$httpBackend});
    }));

    it("should have a controller", function () {
        expect(loginCtrl).toBeDefined();
    });

    let validData = [{"name":"username", "password":"Pa$$w0rd", "honeypot":undefined},
                    {"name":"a1234", "password":"Pa$$w0rd", "honeypot":undefined},
                    {"name":"b#&*^", "password":"Pa$$w0rd", "honeypot":undefined},
                    {"name":"username", "password":"#aF7qqqq", "honeypot":undefined},
                    {"name":"username", "password":"aF7QQQQ", "honeypot":undefined},
                    {"name":"username", "password":"aF70000", "honeypot":undefined},
                    {"name":"username", "password":"aF7====", "honeypot":undefined},];

    let invalidData = [{"name":"username", "password":"Pa$$w0rd", "honeypot":"text"},
                        {"name":"username", "password":"Pa$$w0rd", "honeypot":324},
                        {"name":"username", "password":"Pa$$w0rd", "honeypot":0},
                        {"name":"username", "password":"Pa$$w0rd", "honeypot":null},
                        {"name":"username", "password":"Pa$$w0rd", "honeypot":""},
                        {"name":"abc", "password":"Pa$$w0rd", "honeypot":undefined},
                        {"name":14664, "password":"Pa$$w0rd", "honeypot":undefined},
                        {"name":"", "password":"Pa$$w0rd", "honeypot":undefined},
                        {"name":null, "password":"Pa$$w0rd", "honeypot":undefined},
                        {"name":"username", "password":"", "honeypot":undefined},
                        {"name":"username", "password":null, "honeypot":undefined},
                        {"name":"username", "password":985455508768, "honeypot":undefined},
                        {"name":"username", "password":"DomoArigatoMrRob0to", "honeypot":undefined},
                        {"name":"username", "password":"@Ki1roy", "honeypot":undefined},
                        {"name":"username", "password":"parts#made#1n#japan", "honeypot":undefined},
                        {"name":"username", "password":"#CELEBRATI0N", "honeypot":undefined}];

    afterEach(function() {
        //loginCtrl.verifyNoOutstandingExpectation();
        //loginCtrl.verifyNoOutstandingRequest();
    });

    /*it("should allow function to send data", function() {
        for (let i in validData) {
            let dataSent = loginCtrl.loginSubmit(validData[i]);
            expect(dataSent).toEqual(true);
        }
    });*/

    it("should not send invalid data", function() {
        for (let i in invalidData) {
            let dataSent = loginCtrl.loginSubmit(invalidData[i]);
            expect(dataSent).toEqual(false);
        }
    });

});