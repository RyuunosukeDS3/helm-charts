// Import the base config from git-standards
const baseConfig = require('git-standards/.releaserc.js');

module.exports = {
  ...baseConfig,
  // Disable commit analysis for changelogs/tags
  branches: ['main'],
  plugins: [
    // Keep all base plugins except those generating tags/notes
    ...baseConfig.plugins.filter(
      (p) => !['@semantic-release/git', '@semantic-release/release-notes-generator'].includes(
        Array.isArray(p) ? p[0] : p
      )
    ),
    [
      'semantic-release-helm3',
      {
        chartPath: process.env.CHART_PATH,
        pkgRoot: process.env.CHART_PATH,
      },
    ],
  ],
};
