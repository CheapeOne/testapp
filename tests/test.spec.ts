import {test} from '@playwright/test';
import {range} from 'lodash-es';

test('example', async ({page}) => {
  await page.goto('https://wikipedia.org');
  console.log(range);
});


/*
> PW_EXPERIMENTAL_TS_ESM=1 npx playwright test --headed

Error [ERR_REQUIRE_ESM] [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/asdf/testapp/node_modules/lodash-es/lodash.js
require() of ES modules is not supported.
require() of /Users/asdf/testapp/node_modules/lodash-es/lodash.js from /Users/asdf/testapp/playwright/test.spec.ts is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename lodash.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /Users/asdf/testapp/node_modules/lodash-es/package.json.

    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1015:13)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Module.require (internal/modules/cjs/loader.js:887:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/asdf/testapp/playwright/test.spec.ts:2:1)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Module._compile (/Users/asdf/testapp/node_modules/pirates/lib/index.js:136:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Object.newLoader [as .ts] (/Users/asdf/testapp/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Module.require (internal/modules/cjs/loader.js:887:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Loader._requireOrImport (/Users/asdf/testapp/node_modules/@playwright/test/lib/loader.js:269:14)
*/