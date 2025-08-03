const nextra = require('nextra')

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true
})

module.exports = withNextra({
  reactStrictMode: true,
  cleanDistDir: true
})
