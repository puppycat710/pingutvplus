module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/js")

  return {
    dir: {
      input: "src",
      output: ".",
      includes: "_includes",
      data: "_data",
    },
  }
}