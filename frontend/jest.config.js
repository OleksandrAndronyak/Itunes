module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    // You may need to update this path to match the location of your src directory
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
  // eslint-disable-next-line no-dupe-keys
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};

/*
In this example, we're using the transform option to tell Jest to use Babel to transpile any files with a .jsx or .js extension. The moduleNameMapper option is used to map module names to different paths. This is useful if your test files use relative paths to import modules from your src directory. Finally, the testEnvironment option is used to specify that Jest should run tests in a jsdom environment, which simulates a browser-like environment in Node.js.
 */
