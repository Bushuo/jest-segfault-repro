/* eslint-env es2020 */
const { defaultTransformerOptions } = require("jest-preset-angular/presets");
const { pathsToModuleNameMapper } = require("ts-jest");
const { paths } = require("./tsconfig.json").compilerOptions;

/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: "<rootDir>" }),
  },
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  maxWorkers: 1,
  testEnvironmentOptions: {
    testEnvironment: "jest-environment-jsdom",
  },
};
