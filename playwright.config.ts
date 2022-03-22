// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  retries: 3,
  testDir: './tests',
};

export default config;
