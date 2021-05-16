class SamplePage {


    clickSubmitButton() {
        $('.pushbutton-wide').waitForClickable({ timeout: 100000 })
        $('.pushbutton-wide').click()
        return this
    }

    getValidationMessage() {
        const message = $('#g2599-name').getAttribute("validationMessage")
        console.log(message)
        return message
    }
}

module.exports = new SamplePage()