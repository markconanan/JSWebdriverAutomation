class SamplePage {

    enterName(name) {
        $('#g2599-name').setValue(name)
    }

    enterEmail(email) {
        $('#g2599-email').setValue(email)
    }

    enterWebsite(website) {
        $('#g2599-website').setValue(website)
    }

    selectExperienceInYears(years) {
        const experience = $('#g2599-experienceinyears')
        experience.selectByVisibleText(years)
    }

    selectExpertise(expertise) {
        if (expertise.includes('Functional')) {
            $(`input[value='Functional Testing']`).click()
        } if (expertise.includes('Automation')) {
            $(`input[value='Automation Testing']`).click()
        } if (expertise.includes('Manual')) {
            $(`input[value='Manual Testing']`).click()
        }
    }

    selectEducation(education) {
        $(`input[value='${education}']`).click()
    }

    enterComment(comment) {
        $('#contact-form-comment-g2599-comment').setValue(comment)
    }

    getSubmissionConfirmation() {
        $('#contact-form-2599 > h3').waitForDisplayed({ timeout: 100000 })
        const confirmation = $('#contact-form-2599 > h3').getText()
        return confirmation
    }

    getContactFormSubmission() {
        const confirmation = $('#contact-form-2599 > blockquote').getText()
        return confirmation
    }

    clickSubmitButton() {
        $('.pushbutton-wide').waitForClickable({ timeout: 100000 })
        $('.pushbutton-wide').click()
        return this
    }

    getNameValidationMessage() {
        const message = $('#g2599-name').getAttribute("validationMessage")
        return message
    }

    getEmailValidationMessage() {
        const message = $('#g2599-email').getAttribute("validationMessage")
        return message
    }

    getCommentValidationMessage() {
        const message = $('#contact-form-comment-g2599-comment').getAttribute("validationMessage")
        return message
    }

    validateSubmittedForm(data) {
        this.getContactFormSubmission().should.contain(data.name)
        this.getContactFormSubmission().should.contain(data.email)
        this.getContactFormSubmission().should.contain(data.website)
        this.getContactFormSubmission().should.contain(data.education)
        this.getContactFormSubmission().should.contain(data.comment)
    }

}

module.exports = new SamplePage()