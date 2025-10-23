// Global test setup
// This file runs before each test suite

// Mock console methods during tests to reduce noise
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};
