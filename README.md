# API Automation with Playwright
This is an API Automation framework that enhanced asserting and validating options with playwright

## Install
`npm install`

## Configuration

### Configure baseURL and API Token
This framework uses `.env` file to fetch `baseURL` and `API Token`, you can configure yours by putting your details in `sample.env` file and rename it to `.env` 
 

## General Declarations

### playwright.config.ts

`playwright.config.ts` contains all the default Pre-headers for executing our test framework. As **Playwright** is a standalone framework so, for performing API tests, we need to config the ts file and it will handle all types of default headers and  **authorization**. By Using dot env packages, we can easily initialize the baseURL and token from this config file only.

![ts file](https://user-images.githubusercontent.com/55917380/196962076-bdf551a3-bd87-457c-9f2c-924f022c913e.png)


### payload.js

For executing different API scenarios, sometimes we need to use **.post** method to send a post request; which basically can create any object. For a neat and robust experience, user can create custom payloads for different types of post requests within exportable-functions

<img width="1403" alt="two" src="https://user-images.githubusercontent.com/55917380/183078644-20df6fd4-2c0c-456f-8b4a-501538e3e345.png">

### response.js

In this file, please input your desired response status based on your project documentation. Please make sure all the responses are according to the positive and negative scenarios. otherwise all utils will fail.
<img width="801" alt="response" src="https://user-images.githubusercontent.com/55917380/196962223-2844f7a9-83ea-4819-a644-78d27c05c33e.png">



## Utils
In this framework, there are several Utils that works and verifies all type of API requests. All the requests are categorized as positive and negative requests. 
By default, we store all of our test cases inside the **tests** folder. We have developed a few generic utils that can be used with any project. 

### getPositiveRespons

Send get request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL.

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response

### postPositiveResponse

Send post request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response


### putPositiveResponse

Send put request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response

### patchPositiveResponse

Send patch request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response


### DeletePositiveResponse

Send Delete request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-   Json response

### getNegativeResponse

Send get request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response

### postNegativeResponse

Send post request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response

### putNegativeRsponse

Send put request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response

### patchNegativeResponse

Send patch request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response

### DeleteNegativeResponse

Send Delete request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `JSON`: Payloads for requests

_Returns_
-  Promise: Promise that resolves to JavaScript object.
-  JSON response


1. We need to import **test**, **expect** from the playwright library at the beginning of the code to use all the functions.
2. We need to import the **payload.js** only for the post requests if requires.
3. We need to import all the utils functions from the utils page in order to work with the enhancements
4. We will use **test** block of playwright for initializing our test case. Note: Each time user will write a new test scenario, **request** and **baseURL** is needed to pass inside the async array function so that one can use these functions inside one test block.  `test("A new test scenario", async () => {});`
5. Inside the test case please declare one constant and inside that make a request according to your need from our utils, like, `const result = await getPositiveResponse("Extention of the baseURL");
6. Thats it, Just for your verification you can now console log the declared variable and it will return the result with JSON format directly. One dont need to check with any default expect method like `expect(response.status()).toBe(200)` to be written multiple times. Utils functions covers all the default assersion method. So if one needs to verify specific data inside the reponse then only the person can use expect function but apart from that utils covered all. 
7. In the Utils, We also implemented a custom matcher named `toBeWithinRange` which will verify the range for requests. Anybody makes changes to Utils and modifies it accordingly.
<img width="917" alt="sample test case" src="https://user-images.githubusercontent.com/55917380/196962371-7b0f5a6f-0f21-46d1-9dfa-254812e8de62.png">

So in this manner, one can add many test cases and assertions at once to test out API for that.
## Run the test cases
To run all the test scripts available on the specs folder
`npx playwright test`
<img width="1007" alt="four" src="https://user-images.githubusercontent.com/55917380/183078736-f274358c-3538-4478-8684-ce79d7bb0219.png">

To run a single file 
`npx playwright test filename.test.js`

## Reporting
Playwright offers an in-built reporting tool as well as it also supports 3rd party reports. To use an inbuild report one should just add `reporter: 'HTML'` in the config file and after each execution, the report will be generated. For more information about how to configure reports in playwright please go to:https://playwright.dev/docs/test-reporters

## Documentation

* Playwright API Testing: https://playwright.dev/docs/test-api-testing



## Does this interest you? ##

<a href="https://rtcamp.com/careers/"><img src="https://rtcamp.com/wp-content/uploads/sites/2/2019/04/github-banner@2x.png" alt="Join us at rtCamp, we specialize in providing high-performance enterprise WordPress solutions"></a>



