<script setup lang="ts">
import {
  SidebarProvider,
  Sidebar,
  SidebarGroup,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarInset,
} from '@/components/ui/sidebar'
import { RouterLink, useRoute } from 'vue-router'
import { BoxesIcon, Settings2Icon } from 'lucide-vue-next'
import { watch } from 'vue'
import { useTitle } from '@vueuse/core'

const route = useRoute()

watch(
  () => route.path,
  () => {
    let title = ''
    for (const it of route.matched) {
      title += title ? ` | ${it.meta.title}` : it.meta.title || 'zoo'
    }
    useTitle(title)
  },
)
</script>

<template>
  <div class="flex h-screen w-screen flex-col">
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <RouterLink to="/apps">
                  <SidebarMenuButton>
                    <BoxesIcon class="mr-2" />
                    <span>应用中心</span>
                  </SidebarMenuButton>
                </RouterLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <RouterLink to="/settings">
                  <SidebarMenuButton>
                    <Settings2Icon class="mr-2" />
                    <span>全局配置</span>
                  </SidebarMenuButton>
                </RouterLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <slot />
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>
