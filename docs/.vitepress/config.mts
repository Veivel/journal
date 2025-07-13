import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { Plugin } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "journal",
  description: "veivel's blog; a documentation of life through the days & years.",
  lastUpdated: true,
  // markdown: {
  //   theme: "github-dark"
  // },
  vite: {
    plugins: [
      /* @ts-ignore */
      tailwindcss(),
    ],
  },
  transformHead: ({ assets }) => {
      /* adjust the regex accordingly to match your font */
      const myFontFile = assets.find(file => /font-name\.\w+\.woff2/)
      if (myFontFile) {
        return [
          [
            'link',
            {
              rel: 'preload',
              href: myFontFile,
              as: 'font',
              type: 'font/woff2',
              crossorigin: ''
            }
          ]
        ]
      }
  }
})