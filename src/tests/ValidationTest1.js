const samplePage = require("../pages/SamplePage")
var formData = require("../resources/formdata1.json")

describe('Sample Page Test 1', () => {

    it('Trigger and check validations', () => {

        samplePage.clickSubmitButton().getNameValidationMessage()
            .should.equal('Please fill in this field.')
        samplePage.enterName(formData.name)
        samplePage.enterEmail(formData.invalidEmail)
        samplePage.clickSubmitButton().getEmailValidationMessage()
            .should.equal(`Please include an '@' in the email address. '${formData.invalidEmail}' is missing an '@'.`)
        samplePage.enterEmail(formData.email)
        samplePage.enterWebsite(formData.website)
        samplePage.selectExperienceInYears(formData.experience)
        samplePage.selectExpertise(formData.expertise)
        samplePage.selectEducation(formData.education)
        samplePage.clickSubmitButton().getCommentValidationMessage()
            .should.equal('Please fill in this field.')
        samplePage.enterComment(formData.comment)
        samplePage.clickSubmitButton()
        samplePage.getSubmissionConfirmation().should.contain("Message Sent")
        samplePage.getContactFormSubmission().should.contain(formData.experience)
    });
});

