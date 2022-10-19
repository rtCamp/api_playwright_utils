import  { expect, PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
 require('dotenv').config();

// expect.extend({
//   toBeWithinRange(received: number, floor: number, ceiling: number) {
//     const pass = received >= floor && received <= ceiling;
//     if (pass) {
//       return {
//         message: () => 'passed',
//         pass: true,
//       };
//     } else {
//       return {
//         message: () => 'failed',
//         pass: false,
//       };
//     }
//   },
// });

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

export default config;