
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/said/gatsby/gatsby-course/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/said/gatsby/gatsby-course/src/pages/index.js"))
}

