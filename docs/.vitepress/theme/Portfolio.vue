<script setup lang="ts">
  import { computed } from 'vue'
  import { useData } from 'vitepress'
  import { formatTimestamp } from './utils.js';

  const { page } = useData()

  const lastUpdated = computed(() =>
    page.value.lastUpdated ? formatTimestamp(new Date(page.value.lastUpdated).toISOString()) : ''
  )
</script>

<template>
  <div class="p-2 min-h-screen flex flex-col">
    <a href="https://github.com/veivel/journal" target="_blank" rel="noreferrer" class="ml-auto hover:scale-110 transition-all">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30" fill="#ffffff">
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
      </svg>
    </a>
    <div class="relative py-8 px-4 sm:px-[calc(50dvw-340px)] 2xl:px-[calc(50dvw-340px)] flex flex-col h-fit">
      <div class="flex flex-col mb-4">
        <h1 class="special-underline w-fit">veivel's website</h1>
        <p>welcome to my humble little abode!</p>
      </div>
      <div class="flex flex-col mb-4">
        <h3 class="special-underline w-fit">› about me</h3>
        <p>
          i am a software engineer @ Eesel AI, where i am building our core product & working with
          agentic AI. previously, i built data infrastructure & the data warehouse @ InfinID.
          <!-- i graduated from Universitas Indonesia in 2025 with a computer science degree. -->
          <br/><br/>
          i love to fiddle with things, experiment, and learn.
          the interests i've been pursuing include devops, software engineering, and databases
          (but you can pique my interest with any software or data infrastructure!).
          outside of work, you'll find me working on working on passion projects
          like the ones highlighted below.
        </p>
      </div>
      <div class="flex flex-col mb-4 [&_li]:list-['\21B3'] [&_li]:ml-4">
        <h3 class="special-underline w-fit">› highlighted works</h3>
        <p class="mb-2">(click on any to view more details)</p>

        <details class="text-sm font-bold ml-2">
          <summary>
            <span>Melio</span>
          </summary>
          <ul>
              <li>
              melio is a Minecraft community & game server I founded in March 2024,
              amassing over 900 total players and generating over 1000 USD in revenue.
              </li>
              <li>
                i ran a team of 5 and managed all the tech & infra,
                which included building our own <a href="https://github.com/Veivel/OreReadoutV2">tools</a> from time to time.
              </li>
              <li>
                <a href="https://meliosmp.com">check it out here</a>,
                or read about <a href="/blog/melio-technical">its architecture</a>!
              </li>
          </ul>
          <br/>
        </details>
        <details class="text-sm font-bold ml-2">
          <summary>
            <span>Nosh</span>
          </summary>
          <ul>
            <li>
              nosh is a web app for people with any food allergies/sensitivities
              to share about safe dining spots in their area.
            </li>
            <li>
              we developed this for the Garuda Hacks 5.0 hackathon and won 2nd runner-up :D
            </li>
            <li>
              <a href="https://devpost.com/software/nosh">check it out here</a>,
              or read about <a href="/blog/garuda-hacks">the experience</a>!
            </li>
          </ul>
        </details>
      </div>
      <div class="flex flex-col mb-4">
        <h3 class="special-underline w-fit">› links</h3>
        <ul>
          <li>
            <a href="/blog">my blog</a>
          </li>
          <li>
            <a href="https://github.com/Veivel">github</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/veivel">linkedin</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col mb-4">
        <h3 class="special-underline w-fit">› contact</h3>
        <p>
          don't hesitate to reach out!
          <br/>
          you can find me on LinkedIn
          or via email:
          <span class="text-white">me [at] veivelp [dot] com</span>
        </p>
      </div>
    </div>
    <div v-if="lastUpdated" class="text-xs mt-auto font-light ml-1 roboto-mono font-medium">
      <span>last updated: </span>
      <span class="text-white">{{ lastUpdated }}</span>
    </div>
  </div>
</template>
