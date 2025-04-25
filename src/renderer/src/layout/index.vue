<script setup lang="ts">
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarGroup,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarInset,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { XIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

function closeWin() {
  window.electron.ipcRenderer.send('win:invoke', 'close')
}
</script>

<template>
  <div class="flex h-screen w-screen flex-col">
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>应用中心</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>全局配置</span>
                </SidebarMenuButton>
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
