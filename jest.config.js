module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  preset: "ts-jest",
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ["**/**/*.spec.ts"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
}
