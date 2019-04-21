module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "setupFiles": ['./jest.setup.js'],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "transformIgnorePatterns": ['<rootDir>/node_modules/'],
  "verbose": true,
  "testRegex": "(\\.(test))\\.(ts|tsx)$",
}
