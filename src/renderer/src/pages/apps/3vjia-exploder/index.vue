<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import MainTable from './components/MainTable.vue'
</script>

<template>
  <div class="flex h-screen w-screen flex-col">
    <header class="border-b">header</header>
    <main class="flex flex-1">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel :default-size="15">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel>
          <div>
            <MainTable />
          </div>
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel :default-size="20">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">details</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
    <footer class="bg-gray-100">footer</footer>
  </div>
</template>
