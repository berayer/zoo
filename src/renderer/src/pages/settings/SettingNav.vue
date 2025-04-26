<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { useRoute } from 'vue-router'
import { settingsRoute } from '.'
import { ScrollArea } from '@/components/ui/scroll-area'

const route = useRoute()

const items = settingsRoute.children
</script>

<template>
  <div class="p-1 md:hidden">
    <Select value="{val}" onValueChange="{handleSelect}">
      <SelectTrigger class="h-12 sm:w-48">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="item in items" :key="item.path" :value="item.path">
          <div class="flex gap-x-4 px-2 py-1">
            <span class="scale-125"><component :is="item.meta.icon" /></span>
            <span class="text-md">{{ item.meta.title }}</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>

  <ScrollArea orientation="horizontal" class="bg-background hidden w-full min-w-40 px-1 py-2 md:block">
    <nav class="flex space-x-2 py-1 lg:flex-col lg:space-y-1 lg:space-x-0">
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
        <span class="mr-2"><component :is="item.meta.icon" /></span>
        {{ item.meta.title }}
      </RouterLink>
    </nav>
  </ScrollArea>
</template>
