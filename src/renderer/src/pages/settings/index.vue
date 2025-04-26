<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import SidebarNav from './components/SidebarNav.vue'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { LogOutIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="space-y-6 p-8 pb-16">
      <div class="flex items-center justify-between">
        <div class="space-y-0.5">
          <h2 class="text-2xl font-bold tracking-tight">设置</h2>
          <p class="text-muted-foreground">配置一些这个以及那个。</p>
        </div>
        <RouterLink to="/apps">
          <Button size="icon" variant="ghost"><LogOutIcon /></Button>
        </RouterLink>
      </div>

      <Separator class="my-6" />
      <div class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-12">
        <aside class="md:w-1/6">
          <SidebarNav />
        </aside>
        <div class="flex-1 md:max-w-2xl">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
