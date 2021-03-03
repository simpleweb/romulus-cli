module.exports = {
  preset: "react-native",
  moduleDirectories: ["node_modules", "utilities"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./utilities/test-setup.js",
  ],
};
