const userController = require('../../app/controllers/userController');
const userService = require('../../app/services/userService');

// Mock the userService
jest.mock('../../app/services/userService');

describe('UserController', () => {
  let req, res;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Create mock request and response objects
    req = {
      params: {},
      body: {},
      query: {}
    };

    res = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    };
  });

  describe('getAll', () => {
    it('should return all users successfully', () => {
      // Arrange
      const mockUsers = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ];
      userService.getAll.mockReturnValue(mockUsers);

      // Act
      userController.getAll(req, res);

      // Assert
      expect(userService.getAll).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(mockUsers);
    });

    it('should return empty array when no users exist', () => {
      // Arrange
      const mockUsers = [];
      userService.getAll.mockReturnValue(mockUsers);

      // Act
      userController.getAll(req, res);

      // Assert
      expect(userService.getAll).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(mockUsers);
    });
  });
});
