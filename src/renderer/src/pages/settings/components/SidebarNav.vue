<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { settingsRoute } from '..'

const route = useRoute()
const items = settingsRoute.children
</script>

<template>
  <nav :class="cn('flex space-x-2 md:flex-col md:space-y-1 md:space-x-0')">
    <RouterLink
      v-for="item in items"
      :key="item.path"
      :to="item.path"
      :class="
        cn(
          buttonVariants({ variant: 'ghost' }),
          route.fullPath === item.path ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline',
          'justify-start',
        )
      "
    >
      {{ item.meta.title }}
    </RouterLink>
  </nav>
</template>
