module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.ts$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  testEnvironment: "jsdom"
}
