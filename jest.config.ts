import type { Config } from 'jest';
import nextJest from 'next/jest.js';

//https://nextjs.org/docs/app/building-your-application/testing/jest
const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

export default createJestConfig(config);
