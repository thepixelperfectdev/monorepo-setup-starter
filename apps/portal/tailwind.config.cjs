/** @type {import('tailwindcss').Config} */
const config = require("@repo/config/tailwindConfig");

module.exports = {
  ...config,
  content: ["./src/**/*.tsx", "../../packages/ui/**/*.tsx"],
};
