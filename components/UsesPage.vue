<template>
  <div class="container">
    <h1 class="title">
      <span v-for="(letter, index) in USES" :style="{ animationDelay: `${(index + 2) / 10}s` }">{{ letter }}</span>
    </h1>
    <p class="subtitle hidden" :style="{ animationDelay: '0.3s' }">
    <mark>frontend:</mark> reactjs, nextjs, redux, contextapi, vuejs, nuxtjs, react native,<br>
    bootstrap, tailwind, chakraui, materialui, javascript, typescript, html, css
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '0.4s' }">
      <mark>backend:</mark> nodejs, expressjs, nestjs, spring boot, rest api, ipfs, <br> ceramic network, jwt
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '0.5s' }">
      <mark>languages:</mark> javascript, typescript, java, c#, python, c/c++, r, assembly, oop
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '0.5s' }">
      <mark>database:</mark> postgresql, mongodb, mongoose, firebase, mysql, sqlite, ceramic network
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '0.5s' }">
      <mark>software & others:</mark> git, figma (ui/uxdesign), postman, agile & scrum,<br> test-driven development, continuous integration & deployment
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '0.5s' }">
      <mark>cloud:</mark> aws
    </p>

  </div>
</template>

<script setup lang="ts">
const USES = 'uses'.split('')
</script>
