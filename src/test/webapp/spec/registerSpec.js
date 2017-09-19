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

    let invalidDate = [];

    let invalidNames = [/*{"name":"abc"},{"name":14664},{"name":""},{"name":null}*/];

    let invalidEmails = [/*"test@ test.co.uk","ghgf@fe.com.co.","tes@t@test.com","",null,"email@emailcom"*/];

    let invalidPasswords = [/*"","DomoArigatoMrRob0to","@Ki1roy","parts#made#1n#japan","#CELEBRATI0N"*/];

    let invalidConfirmPasswords = [{"password":"Pa$$w0rd","confirmPassword":"Pa$$w0rd1"},
                                {"password":"#aF7qqqq","confirmPassword":"#aF7qqq"},
                                {"password":"#aF7QQQQ","confirmPassword":" #aF7QQQQ"},
                                {"password":"#aF70000","confirmPassword":"#wa1kLikeAnEgyptian"},
                                {"password":"#aF7====","confirmPassword":""},
                                {"password":"#aF7#aF7","confirmPassword":null}];

    it("should accept valid usernames", function() {
        for (let i in validData) {
            registerCtrl.validUsername(validData[i].name);
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
            registerCtrl.validUsername(validData[i].email);
            expect(registerCtrl.invalidEmail).toEqual(false);
        }
    });

    it("should not accept invalid emails", function() {
        for (let i in invalidEmails) {
            registerCtrl.validUsername(invalidEmails[i]);
            expect(registerCtrl.invalidEmail).toEqual(true);
        }
    });

    it("should accept valid passwords", function() {
        for (let i in validData) {
            registerCtrl.validUsername(validData[i]);
            expect(registerCtrl.invalidPasswordFormat).toEqual(false);
        }
    });

    it("should not accept invalid passwords", function() {
        for (let i in invalidPasswords) {
            registerCtrl.validUsername(invalidPasswords[i]);
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

    /*it("should not send invalid data", function() {
        for (let obj in invalidData) {
            let dataSent = registerCtrl.registerNew(invalidData[obj]);
            expect(dataSent).toEqual(false);
        }
    });*/

});