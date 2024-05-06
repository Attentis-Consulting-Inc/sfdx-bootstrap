const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

let omnistudioComponents;
try {
  omnistudioComponents = require("./omnistudio-components.json");
} catch {
  omnistudioComponents = {};
}

const coveragePathIgnorePatterns = [];
Object.entries(omnistudioComponents).forEach(([app, components]) => {
  const rootPath = `<rootDir>/${app}/main/default/lwc/`;
  components.forEach((component) => {
    coveragePathIgnorePatterns.push(`${rootPath}${component}/`);
  });
});

const setupFiles = jestConfig.setupFiles || [];
setupFiles.push('<rootDir>/jest/setupFiles/setEnvVars.js');

const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest/setupFiles/sa11y-setup.js');

module.exports = {
  ...jestConfig,
  setupFiles,
  setupFilesAfterEnv,
  coveragePathIgnorePatterns,
  modulePathIgnorePatterns: ['<rootDir>/.localdevserver'],
  coverageThreshold: {
    global: {
      statements: 80,
      lines: 80
    },
    './*/main/default/lwc/**/*.js': {
      statements: 65,
      lines: 65
    }
  }
};
