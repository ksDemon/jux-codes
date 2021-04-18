module.exports = function(config) {
  config.addPassthroughCopy("src");
  return  {
    dir: {
      input: "dist",
      output: "_site"
    }
  };
};