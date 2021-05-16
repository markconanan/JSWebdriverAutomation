const samplePage = require("../pages/SamplePage")
var formData = require("../resources/formdata2.json")

describe('Sample Page Test 2', () => {

    it('Trigger and check validations', () => {
        samplePage.clickSubmitButton().getNameValidationMessage()
            .should.equal('Please fill in this field.')
        samplePage.enterName(formData.name)
        samplePage.enterEmail(formData.invalidEmail)
        samplePage.clickSubmitButton().getEmailValidationMessage()
            .should.equal("Please include an '@' in the email address. 'sample' is missing an '@'.")
        samplePage.enterEmail(formData.email)
        samplePage.clickSubmitButton().getCommentValidationMessage()
            .should.equal('Please fill in this field.')
        samplePage.enterComment(formData.comment)
        samplePage.clickSubmitButton()
        samplePage.getSubmissionConfirmation().should.contain("Message Sent")
        samplePage.getContactFormSubmission()
    });
});

