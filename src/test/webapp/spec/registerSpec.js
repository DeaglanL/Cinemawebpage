"use strict";

describe("Register Form", function() {
    let registerCtrl;

    beforeEach(module("ui.router"));
    beforeEach(module("apolloCinema"));

    beforeEach(inject(function ($controller, $httpBackend) {
        registerCtrl = $controller("RegisterController", {$httpBackend});
    }));

    it("should have a controller", function () {
        expect(registerCtrl).toBeDefined();
    });

    let validData = [{"name":"username", "email":"david.jiang@qa.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                    {"name":"a1234", "email":"test@test.com", "honeypot":"", "password":"#aF7qqqq", "confirmPassword":"#aF7qqqq"},
                    {"name":"b#&*^", "email":"test@test.co.uk", "honeypot":"", "password":"#aF7QQQQ", "confirmPassword":"#aF7QQQQ"},
                    {"name":"username", "email":"test734ltylytkliytkryety9ef@jb-fe.com", "honeypot":"", "password":"#aF70000", "confirmPassword":"#aF70000"},
                    {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"#aF7====", "confirmPassword":"#aF7===="}];

    let invalidNames = [{"name":"abc", "email":"email@domain.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":14664, "email":"email@domain.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":"", "email":"email@domain.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":null, "email":"email@domain.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"}];

    let invalidEmails = [{"name":"username", "email":"test@ test.co.uk", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":"username", "email":"ghgf@fe.com.co.", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":"username", "email":"tes@t@test.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":"username", "email":null, "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":"username", "email":"email@emailcom", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"},
                        {"name":"username", "email":"", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd"}];

    let invalidPasswords = [{"name":"username", "email":"email@domain.com", "honeypot":"", "password":"", "confirmPassword":""},
                            {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"DomoArigatoMrRob0to", "confirmPassword":"DomoArigatoMrRob0to"},
                            {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"@Ki1roy", "confirmPassword":"@Ki1roy"},
                            {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"parts#made#1n#japan", "confirmPassword":"parts#made#1n#japan"},
                            {"name":"username", "email":"email@domain.com", "honeypot":"", "password":null, "confirmPassword":null},
                            {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"", "confirmPassword":""},
                            {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"#CELEBRATI0N", "confirmPassword":"#CELEBRATI0N"}];

    let invalidConfirmPasswords = [{"name":"username", "email":"email@domain.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":"Pa$$w0rd1"},
                                    {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"#aF7qqqq", "confirmPassword":"#aF7qqq"},
                                    {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"aF7QQ#QQ", "confirmPassword":"#wa1kLikeAnEgyptian"},
                                    {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":""},
                                    {"name":"username", "email":"email@domain.com", "honeypot":"", "password":"Pa$$w0rd", "confirmPassword":null}];

    let invalidData = invalidNames + invalidEmails + invalidPasswords + invalidConfirmPasswords;

    it("should accept valid usernames", function() {
        for (let i in validData) {
            registerCtrl.validUsername(validData[i]);
            expect(registerCtrl.invalidUsername).toEqual(false);
        }
    });

    it("should not accept invalid usernames", function() {
        for (let i in invalidNames) {
            registerCtrl.validUsername(invalidNames[i]);
            expect(registerCtrl.invalidUsername).toEqual(true);
        }
    });

    it("should accept valid emails", function() {
        for (let i in validData) {
            registerCtrl.validEmail(validData[i]);
            expect(registerCtrl.invalidEmail).toEqual(false);
        }
    });

    it("should not accept invalid emails", function() {
        for (let i in invalidEmails) {
            registerCtrl.validEmail(invalidEmails[i]);
            expect(registerCtrl.invalidEmail).toEqual(true);
        }
    });

    it("should accept valid passwords", function() {
        for (let i in validData) {
            registerCtrl.validPasswordFormat(validData[i]);
            expect(registerCtrl.invalidPasswordFormat).toEqual(false);
        }
    });

    it("should not accept invalid passwords", function() {
        for (let i in invalidPasswords) {
            registerCtrl.validPasswordFormat(invalidPasswords[i]);
            expect(registerCtrl.invalidPasswordFormat).toEqual(true);
        }
    });

    it("should match valid passwords and confirmed passwords if thy are the same", function() {
        for (let i in validData) {
            registerCtrl.validConfirmPassword(validData[i]);
            expect(registerCtrl.passwordNotConfirmed).toEqual(false);
        }
    });

    it("should not match valid passwords and confirmed passwords if they are different", function() {
        for (let i in invalidConfirmPasswords) {
            registerCtrl.validConfirmPassword(invalidConfirmPasswords[i]);
            expect(registerCtrl.passwordNotConfirmed).toEqual(true);
        }
    });

    afterEach(function() {
        //registerCtrl.verifyNoOutstandingExpectation();
        //registerCtrl.verifyNoOutstandingRequest();
    });

    /*it("should allow function to send data", function() {
        for (let obj in validData) {
            let dataSent = registerCtrl.registerNew(validData[obj]);
            expect(dataSent).toEqual(true);
        }
    });*/

    it("should not send invalid data", function() {
        for (let obj in invalidData) {
            let dataSent = registerCtrl.registerNew(invalidData[obj]);
            expect(dataSent).toEqual(false);
        }
    });

});