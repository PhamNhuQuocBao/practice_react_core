export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "jest-transformer-svg",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "\\.svg$": "<rootDir>/test/__ mocks __/svgMock.js",
  },
};
