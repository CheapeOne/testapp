// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  retries: 3,
  testDir: './tests',
};

export default config;
