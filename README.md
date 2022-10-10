# EasyDash API Automation with Playwright
This is an automation test suit for api testing for easydash.

Used Framewrok: https://playwright.dev/docs/test-api-testing

## install
`npm install`

## Setup
Please configure the dotenv package and create a .env file from the env.example file. provide your base URL and tocken on the env file.

## Playwright 
We are using **Playwright** for both managing tests and handling HTTP requests. 
**Test** is a block in **Playwright** where user can write their specific functional scenario that contain the logics and methods for verifiying that particular test case is working properly or not.
As playwright also handles the HTTP request alongside handling the tests, all the basic API request functions are available in the **Playwright**

**.get** method for getting all the values for request

**.post** method to create or generate values for request.

**.put /.patch** method to update respective values for request

**.delete** method for deleting some values for request.

## General Declarations
When anyone clone the repo, there is a file named
### playwright.config.js
<img width="1399" alt="one" src="https://user-images.githubusercontent.com/55917380/183078522-0f1dad64-1a73-4fab-a36a-693be856c2c7.png">

It contains all the default Pre-headers for executing our test framework. As **Playwright** is a standalone framework so,for performing API tests, we only need this config file, where it will handle all types of default headers and  **authorization**. By Using dot env packagage we can easily initialize the the baseURL and token from this config file only.

### payload.js
For executing different API scenarios, sometimes we need to use **.post** method to send a post request; which basically can create any object. For a neat and robust experience, user can create custom payload for different type of post requests within exportable-fucntions.
<img width="1403" alt="two" src="https://user-images.githubusercontent.com/55917380/183078644-20df6fd4-2c0c-456f-8b4a-501538e3e345.png">


## Executing the test cases.
Defaultly We store all of our test cases inside the **tests** folder. When user will write a new test case heres some steps they need to follow for successfull execution,
<img width="1432" alt="three" src="https://user-images.githubusercontent.com/55917380/183078699-f0a81bb9-a1e8-44e9-941f-9e85182c8c28.png">


1. We need to import **test**, **expect** from playwright library in the beginning of the code to use all the functions.
2. We need to import the **payload.js** only for the post requests if requires.
3. We will use **test** block of playwright for initialize our test case. Note: Each time user will write new test scenario, **request** and **baseURL** is needed to pass inside async array function so that one can use these functions inside one test block.  `test("A new test scenario", async ({request,baseURL,}) => {});`
4. In the **playwright**, user sends the request and store the request inside one variable so that data validation can be done using that variable. `const response = await request.get(`${baseURL}/user/me`);`Note that, **playwright** will not store the response in Json format directly so its always safe that after each request we can convert the response in json like this, `const res = await response.json();` In this way validating response data will become more easier using dot method. 
5. After sending any requests, our first job is to verify the request status. For verifying the status of our request, we can use **Playwright** matchers as it very much handy and will maintain a clean descrpitive manner in the script itself, such as 
   `expect(response.status()).toBe(200)`

So in this manner one can add many test cases and assertions at once to test out API's for that.
## Run the test cases
To run all the test scripts available on the specs folder
`npx playwright test`
<img width="1007" alt="four" src="https://user-images.githubusercontent.com/55917380/183078736-f274358c-3538-4478-8684-ce79d7bb0219.png">



To run a single file 
`npx playwright test filename.test.js`

## Reporting
Playwright offers in-built reporting tool as well as it also supports 3rd party reports. To use inbuild report one should just add `reporter: 'html'` in the config file and after each execution report will be generate. For more information about how to configure reports in playwright please goto :https://playwright.dev/docs/test-reporters

