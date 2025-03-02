// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import "@veivel/carboncss/style.css"
import "./main.css"

export default {
  // extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

// export default DefaultTheme

