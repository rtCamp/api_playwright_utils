# API Automation with Playwright
This is an API automation framework that enhanced asserting and validating options with playwright

Used Framewrok: https://playwright.dev/docs/test-api-testing

## install
`npm install`

## Setup
Please configure the dotenv package and create a .env file from the sample.env file. provide your base URL and token on the env file.
 

## General Declarations
When anyone clone the repo, there is a file named
### playwright.config.ts
![ts file](https://user-images.githubusercontent.com/55917380/196962076-bdf551a3-bd87-457c-9f2c-924f022c913e.png)


It contains all the default Pre-headers for executing our test framework. As **Playwright** is a standalone framework so,for performing API tests, we only need this config file, where it will handle all types of default headers and  **authorization**. By Using dot env packagage we can easily initialize the the baseURL and token from this config file only.

### payload.js

For executing different API scenarios, sometimes we need to use **.post** method to send a post request; which basically can create any object. For a neat and robust experience, user can create custom payload for different type of post requests within exportable-fucntions.

<img width="1403" alt="two" src="https://user-images.githubusercontent.com/55917380/183078644-20df6fd4-2c0c-456f-8b4a-501538e3e345.png">

### response.js
In this file, please insert your desired response status based on your project documentation. Please make sure all the responses are according to the positive and negative scenario. otherwise all utils will fail.
<img width="801" alt="response" src="https://user-images.githubusercontent.com/55917380/196962223-2844f7a9-83ea-4819-a644-78d27c05c33e.png">



## Executing the test cases with Utils
In this framework there are several Utils that works and verifies all type of API requests. All the requests are categorized as positive and negative requests. 
Defaultly We store all of our test cases inside the **tests** folder. When user will write a new test case heres some steps they need to follow for successfull execution,

## API

### GetPositiveRespons

Send Get request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL.

_Returns_
-   Json respone

### PostPositiveResponse

Send Post request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone


### PutPositiveResponse

Send Put request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone

### PatchPositiveResponse

Send Patch request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone


### DeletePositiveResponse

Send Delete request and verifies positive test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone

### GetNegativeResponse

Send Get request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,

_Returns_
-   Json respone

### PostNegativeResponse

Send Post request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone

### PutNegativeRsponse

Send Put request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone

### PatchNegativeResponse

Send Patch request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone

### DeleteNegativeResponse

Send Delete request and verifies negative test scenarios

_Parameters_

-   _extension_ `string`: End point of BaseURL,
-   _payload_ `Json` : Payloads for requests

_Returns_
-   Json respone


1. We need to import **test**, **expect** from playwright library in the beginning of the code to use all the functions.
2. We need to import the **payload.js** only for the post requests if requires.
3. We need to import all the utils functions from utils page in order to work with the enhancements
4. We will use **test** block of playwright for initialize our test case. Note: Each time user will write new test scenario, **request** and **baseURL** is needed to pass inside async array function so that one can use these functions inside one test block.  `test("A new test scenario", async () => {});`
5. Inside the test case please declare one constant and inside that make a request accoding to your need from our utils, like , `const result = await GetPositiveResponse("Extention of the baseURL");`
6. Thats it, Just for your verification you can now console log the declared variable and it will return the result with JSON format directly. One dont need to check with any default expect method like `expect(response.status()).toBe(200)` to be written multiple times. Utils functions covers all the default assersion method. So if one needs to verify specific data inside the reponse then only the person can use expect function but apart from that utils covered all. 
7. In the Utils, We also implemented custom matcher named `toBeWithinRange` which will verifies the range for requests. Anybody make changes to Utils  and modify it accordingly.
<img width="917" alt="sample test case" src="https://user-images.githubusercontent.com/55917380/196962371-7b0f5a6f-0f21-46d1-9dfa-254812e8de62.png">


So in this manner one can add many test cases and assertions at once to test out API's for that.
## Run the test cases
To run all the test scripts available on the specs folder
`npx playwright test`
<img width="1007" alt="four" src="https://user-images.githubusercontent.com/55917380/183078736-f274358c-3538-4478-8684-ce79d7bb0219.png">

To run a single file 
`npx playwright test filename.test.js`

## Reporting
Playwright offers in-built reporting tool as well as it also supports 3rd party reports. To use inbuild report one should just add `reporter: 'html'` in the config file and after each execution report will be generate. For more information about how to configure reports in playwright please goto :https://playwright.dev/docs/test-reporters

## BTW, We're Hiring!

<a href="https://rtcamp.com/"><img src="https://rtcamp.com/wp-content/uploads/sites/2/2019/04/github-banner@2x.png" alt="Join us at rtCamp, we specialize in providing high performance enterprise WordPress solutions"></a>
