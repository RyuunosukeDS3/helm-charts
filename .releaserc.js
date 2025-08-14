// Import the base config from git-standards
const baseConfig = require('git-standards/.releaserc.js');

module.exports = {
  ...baseConfig,
  // Only release from main branch
  branches: ['main'],
  plugins: [
    [
      'semantic-release-helm3',
      {
        chartPath: process.env.CHART_PATH,
        pkgRoot: process.env.CHART_PATH,
      },
    ],
  ],
};
