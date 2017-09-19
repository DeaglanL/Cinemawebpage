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

    let validData = [{"name":"username", "password":"Pa$$w0rd", "honeypot":""},
                    {"name":"a1234", "password":"Pa$$w0rd", "honeypot":""},
                    {"name":"b#&*^", "password":"Pa$$w0rd", "honeypot":""},
                    {"name":"username", "password":"#aF7qqqq", "honeypot":""},
                    {"name":"username", "password":"aF7QQQQ", "honeypot":""},
                    {"name":"username", "password":"aF70000", "honeypot":""},
                    {"name":"username", "password":"aF7====", "honeypot":""},];

    let invalidData = [{"name":"username", "password":"Pa$$w0rd", "honeypot":"text"},
                        {"name":"username", "password":"Pa$$w0rd", "honeypot":324},
                        {"name":"username", "password":"Pa$$w0rd", "honeypot":0},
                        {"name":"username", "password":"Pa$$w0rd", "honeypot":null},
                        {"name":"abc", "password":"Pa$$w0rd", "honeypot":""},
                        {"name":14664, "password":"Pa$$w0rd", "honeypot":""},
                        {"name":"", "password":"Pa$$w0rd", "honeypot":""},
                        {"name":null, "password":"Pa$$w0rd", "honeypot":""},
                        {"name":"username", "password":"", "honeypot":""},
                        {"name":"username", "password":null, "honeypot":""},
                        {"name":"username", "password":985455508768, "honeypot":""},
                        {"name":"username", "password":"DomoArigatoMrRob0to", "honeypot":""},
                        {"name":"username", "password":"@Ki1roy", "honeypot":""},
                        {"name":"username", "password":"parts#made#1n#japan", "honeypot":""},
                        {"name":"username", "password":"#CELEBRATI0N", "honeypot":""}];

    afterEach(function() {
        //loginCtrl.verifyNoOutstandingExpectation();
        //loginCtrl.verifyNoOutstandingRequest();
    });

    /*it("should allow function to send data", function() {
        for (let obj in validData) {
            let dataSent = loginCtrl.loginSubmit(validData[obj]);
            expect(dataSent).toEqual(true);
        }
    });*/

    it("should not send invalid data", function() {
        for (let obj in invalidData) {
            let dataSent = loginCtrl.loginSubmit(invalidData[obj]);
            expect(dataSent).toEqual(false);
        }
    });

});