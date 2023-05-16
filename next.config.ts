module.exports = {
    "collectCoverageFrom": ["src/**/*.ts", "!**/node_modules/**"],
    "coverageReporters": ["html", "text", "text-summary", "cobertura"],
    "testMatch": ["**/*.test.ts"]
  }