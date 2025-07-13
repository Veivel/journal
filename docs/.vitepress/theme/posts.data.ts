import { createContentLoader } from 'vitepress'

// content loader: https://vitepress.dev/guide/data-loading

// please note that this file is loaded as posts.data.js
// despite being a ts file

const data = createContentLoader('posts/*.md', {
  transform(rawData) {
    // map, sort, or filter the raw data as you wish.
    // the final result is what will be shipped to the client.
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.lastUpdated) - +new Date(a.frontmatter.lastUpdated)
    }).map((page) => {
      return page
    })
  }
})
export default data;