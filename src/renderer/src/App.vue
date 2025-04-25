<script setup lang="ts">
import BaseLayout from './layout/index.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <BaseLayout class="select-none">
    <RouterView />
  </BaseLayout>
</template>
