module.exports = {
  preset: "@testing-library/react-native",
  moduleDirectories: ["node_modules", "utilities"],
  setupFilesAfterEnv: ["./utilities/test-setup.js"],
};
