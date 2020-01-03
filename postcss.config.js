module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require("postcss-clean")(),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
        "case-insensitive-attributes": true,
        "hexadecimal-alpha-notation": true,
        "place-properties": true
      }
    })
  ]
};
