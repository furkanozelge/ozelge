<template>
  <div class="container">
    <h1 class="title">
      <span v-for="(letter, index) in FURKAN" :style="{ animationDelay: `${(index + 2) / 10}s` }">{{ letter }}</span>
      <br />
      <span v-for="(letter, index) in OZELGE" :style="{ animationDelay: `${(index + 4) / 10}s` }">{{ letter }}</span>
    </h1>
    <p class="subtitle" :style="{ animationDelay: '1s' }">
      creating softwares at <img src="/Siemens-logo.svg" alt="siemens logo" class="icon" />
      <span class="prev">
        <span class="exp" data-desc="full stack developer">
          10'2023-now &nbsp;⸺ <img src="/siemens-mini.jpeg" alt="siemens logo" class="icon" /> 
          <NuxtLink href="https://www.siemens-healthineers.com/digital-health-solutions/syngo-carbon-space" target="_blank">Siemens</NuxtLink>
        </span>
        <span class="exp" data-desc="full stack developer">
          06'2023-10'2023 ⸺ <img src="/enhencer.png" alt="enhencer logo" class="icon" /> 
          <NuxtLink href="https://enhencer.com/" target="_blank">Enhencer</NuxtLink>
        </span>
        <span class="exp" data-desc="full stack developer">
          05/2022-06/2023 ⸺ <img src="/index-network-black.png" alt="index logo" class="icon" /> 
          <NuxtLink href="https://index.network/" target="_blank">Index Network</NuxtLink>
        </span>
        <span class="exp" data-desc="full stack developer">
          05'2022-02'2023 ⸺ <img src="/papilon.jpeg" alt="papilon logo" class="icon" /> 
          <NuxtLink href="https://papilon.com.tr/" target="_blank">Papilon</NuxtLink>
        </span>
        <span class="exp" data-desc="founder - failed...">
          07'2022-09'2023 ⸺ <img src="/vinn.jpeg" alt="vinn logo" class="icon" /> 
          <NuxtLink href="https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg" target="_blank">Vinn</NuxtLink>
        </span>
        <span class="exp" data-desc="full stack developer">
          03'2021-05'2022 ⸺ <img src="/smartest.jpeg" alt="smartest logo" class="icon" /> 
          <NuxtLink href="https://www.smartestcompany.co/" target="_blank">Smartest Co.</NuxtLink>
        </span>
        <span class="exp" data-desc="full stack developer">
          08'2019-02'2021 ⸺ <img src="/dill-logo.jpeg" alt="dill logo" class="icon" /> 
          <NuxtLink href="https://dillsuite.com/" target="_blank">dill</NuxtLink>
        </span>
      </span>
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '1.1s' }">
      enjoys startups, taking risks, grind
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '1.1s' }">
      bsc. computer science @tedu
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '1.1s' }">
      msc. artificial intelligence @fau-erlangen
    </p>
    <p class="subtitle map" :style="{ animationDelay: '1.2s' }">living in 🇩🇪 nürnberg
      <span class="background">
        <img src="/nurnberg.jpeg" alt="Map of Nürnberg" />
      </span>
    </p>
    <p class="subtitle socials" :style="{ animationDelay: '1.3s' }">
      <NuxtLink href="https://github.com/furkanozelge" target="_blank">
        <GitHubLogoIcon />
      </NuxtLink>
      <NuxtLink href="https://twitter.com/furkanozelge" target="_blank">
        <TwitterLogoIcon />
      </NuxtLink>
      <NuxtLink href="https://linkedin.com/in/furkanozelge/" target="_blank">
        <LinkedInLogoIcon />
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const FURKAN = 'furkan'.split('')
const OZELGE = 'ozelge'.split('')
</script>
