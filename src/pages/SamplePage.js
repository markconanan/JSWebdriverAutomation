class SamplePage {

    enterName(name) {
        $('#g2599-name').setValue(name)
    }

    enterEmail(email) {
        $('#g2599-email').setValue(email)
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

}

module.exports = new SamplePage()