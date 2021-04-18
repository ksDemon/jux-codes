module.exports = function(config) {
  config.addPassthroughCopy("dist");
  return  {
    dir: {
      input: "dist",
      output: "_site"
    }
  };
};