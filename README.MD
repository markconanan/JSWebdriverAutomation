# JS Webdriver Automation: Sample Page
This repo contains an automation framework for a sample form page found in https://www.globalsqa.com/samplepagetest.

# Requirements
* Node.js
* Java -- Needed to run the selenium server
* Chrome

# Test Data
The test uses json files  to provide data to the test. This can be found in src/resources (formdata1.json for ValidationTest1 and formdata2.json for ValidationTest2). The 2 tests are exactly the same and runs in parallel. Please note for some of the fields test data has to be valid for the test to run correctly (i.e. experience in years, expertise, education)

# Installation and Test Execution
To run the tests, clone or download the zip of this repo then install the node modules using ```npm install``` in the terminal in the folder. To execute the test, enter ```npm test``` in the terminal.
