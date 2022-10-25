import  { expect, PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
 require('dotenv').config();

const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 50000
  },
  //reporter: 'html',
  use: {
    baseURL: process.env.URL,
    extraHTTPHeaders:{
    'Accept':'application/json',
      'Authorization': `${process.env.TOKEN}`,  
    }
  },
  
};

// Created a custom asseration for validating the API response code
expect.extend({
  toBeEqualto(status) {
    if (status == 200) {
      return {
        message: () => 'Test case is passed and has status code 200',
        pass: true,
      };
    } else {
      return {
        message: () => `Test case is failed due to recived the status ${status}`,
        pass: false,
      };
    }

  },
});

export default config;