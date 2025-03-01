<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.home" class="p-2 min-h-screen flex flex-col">
    <div class="relative py-8 px-4 sm:px-[calc(50dvw-400px)] 2xl:px-[calc(50dvw-400px)] flex flex-col h-fit">
      <h1 class="special-underline w-fit">{{ site.title }}</h1>
      <p>{{ site.description }}</p>
      <ul>
        <li><a href="/markdown-examples.html">Markdown Examples</a></li>
        <li><a href="/api-examples.html">API Examples</a></li>
      </ul>
    </div>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
