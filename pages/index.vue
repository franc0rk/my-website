<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full md:w-1/3 px-4 block md:hidden">
      <bio-card class="md:h-screen" />
    </div>
    <div class="w-full md:w-2/3 px-4">
      <latest-post class="md:h-screen" />
    </div>
    <div class="w-full md:w-1/3 px-4 hidden md:block">
      <bio-card class="md:h-screen" />
    </div>
  </div>
</template>
