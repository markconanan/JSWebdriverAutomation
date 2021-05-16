const samplePage = require("../pages/SamplePage");

describe('My Login application', () => {

    it('should login with valid credentials', () => {
        samplePage.clickSubmitButton().getValidationMessage()
    });
});

