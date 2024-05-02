const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

const setupFiles = jestConfig.setupFiles || [];
setupFiles.push('<rootDir>/jest/setupFiles/setEnvVars.js');

const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest/setupFiles/sa11y-setup.js');

module.exports = {
  ...jestConfig,
  setupFiles,
  setupFilesAfterEnv,
  modulePathIgnorePatterns: ['<rootDir>/.localdevserver'],
  coverageThreshold: {
    global: {
      statements: 80,
      lines: 80
    },
    './force-app/main/default/lwc/**/*.js': {
      statements: 65,
      lines: 65
    }
  }
};
