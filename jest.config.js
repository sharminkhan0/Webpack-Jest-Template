module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['jest-localstorage-mock'],
    // Jest configuration options go here
    // For example:
    testEnvironment: 'node', // or 'jsdom' if you are testing in a browser-like environment
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use Babel for JavaScript and JSX files
    },
    // Other configuration options...
    reporters: ['default', 'jest-junit'],
    reporters: [
        'default', // Use the default reporter (console output)
        [
          'jest-junit', // Use the jest-junit reporter for XML output
          {
            outputDirectory: 'coverage', // Specify the directory for the output
            outputName: 'cover.xml', // Specify the name of the XML file
          },
        ],
      ],
  };