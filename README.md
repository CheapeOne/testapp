# testapp

For https://github.com/microsoft/playwright/issues/12536

Reproduce by doing the following:

* Clone this repo
* Run `yarn` to install deps
* Run `npx playwright install`
* Run `PW_EXPERIMENTAL_TS_ESM=1 npx playwright test` -> get import error from lodash-es
