let homepage = require('../pages/homepage');

describe('Protractor Demo App', function () {
    it('addition of 2 numbers', function () {
//hello
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('3')
        homepage.enterSecondNumber('2');
        homepage.clickGoButton();
        homepage.verifyResult('5');
    });
    it('subtraction of 2 numbers', function () {

        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('3')
        homepage.enterSecondNumber('2');
        homepage.clickGoButton();
        homepage.verifyResult('100');
        homepage.verifyResult('200');
        homepage.verifyResult('200');

    });
});