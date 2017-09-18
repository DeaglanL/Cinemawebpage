"use strict";

describe("contactController", function() {
    var $controller, contactController;

    // Load ui.router and apolloCinema module
    beforeEach(module("ui.router"));
    beforeEach(module("apolloCinema"));

    // Inject the $controller service to create instances of the controller (ContactController) we want to test
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        contactController = $controller("contactController", {});
    }));

    // Verify our controller exists
    it("should have a contact controller", function() {
        expect(contactController).toBeDefined();
    });

    describe("checkIfRobot", function() {
        var humanHoneypot = "";
        var robotHoneyPot = ["text", 8, null];

        it("should always return false if input is empty or null", function() {
            var isRobot = checkIfRobot(humanHoneypot);
            expect(isRobot).toEqual(false);
        });

        it("should always return true if input is not empty or null", function() {
            for (var j in robotHoneyPot) {
                var isRobot = checkIfRobot(robotHoneyPot[j]);
                expect(isRobot).toEqual(true);
            }
        });
    });

    describe("isValidEmail", function() {
        var validEmails = ["email@domain.com", "email@domain.co.uk", "asjfbsidufbwsliv@gjhr-jrjr.com"];
        var invalidEmails = ["email@emailcom", "test@ test.co.uk", "ghgf@fe.com.co.", "tes@t@test.com", ""];

        it("should be a valid email", function() {
            for (var i in validEmails) {
                var isValid = checkIfRobot(validEmails[i]);
                expect(isValid).toEqual(true);
            }
        });

        it("should not be a valid email", function() {
            for (var j in invalidEmails) {
                var isValid = checkIfRobot(invalidEmails[j]);
                expect(isValid).toEqual(true);
            }
        });
    });

    describe("isValidPhone", function() {
        var validEmails = ["07711283272", "07747043784", "07961543285"];
        var invalidEmails = ["07253", "01747043784", "text", "07letters", "0725307711283272", "", NaN];

        it("should be a valid phone number", function() {
            for (var i in validEmails) {
                var isValid = checkIfRobot(validEmails[i]);
                expect(isValid).toEqual(true);
            }
        });

        it("should not be a valid phone number", function() {
            for (var j in invalidEmails) {
                var isValid = checkIfRobot(invalidEmails[j]);
                expect(isValid).toEqual(true);
            }
        });
    });
});