<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { AArrowUpIcon, AArrowDownIcon, SlidersHorizontalIcon, SettingsIcon } from 'lucide-vue-next'
import { apps } from '.'
import type { RouteRecordRaw } from 'vue-router'
import { ref, watch } from 'vue'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardDescription, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RouterLink } from 'vue-router'

const sort = ref('ascending')
const searchTerm = ref('')

const filteredApps = ref<RouteRecordRaw[]>(apps)

function handleFilter(): void {
  filteredApps.value = apps
    .sort((a, b) =>
      sort.value === 'ascending'
        ? a.meta!.title!.localeCompare(b.meta!.title!)
        : b.meta!.title!.localeCompare(a.meta!.title!),
    )
    .filter((app) => app.meta?.title!.toLowerCase().includes(searchTerm.value.toLowerCase()))
}

watch(
  () => sort.value,
  () => {
    handleFilter()
  },
)
</script>

<template>
  <!-- {/* ===== Content ===== */} -->
  <div class="flex h-screen grow flex-col overflow-hidden">
    <div class="mx-4">
      <h1 class="text-2xl font-bold tracking-tight">App Integrations</h1>
      <p class="text-muted-foreground">Here&apos;s a list of your apps for the integration!</p>
    </div>
    <div class="m-4 flex items-end justify-between sm:my-0 sm:items-center">
      <div class="flex flex-col gap-4 sm:my-4 sm:flex-row">
        <Input
          v-model:model-value="searchTerm"
          placeholder="Filter apps..."
          class="h-9 w-40 lg:w-[250px]"
          :onchange="handleFilter"
        />
        <!-- <Select v-model:model-value="appType">
          <SelectTrigger class="w-36">
            <SelectValue>{{ appText.get(appType) }}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Apps</SelectItem>
            <SelectItem value="connected">Connected</SelectItem>
            <SelectItem value="notConnected">Not Connected</SelectItem>
          </SelectContent>
        </Select> -->
      </div>

      <div class="flex gap-2">
        <RouterLink to="/settings">
          <Button variant="ghost" size="icon">
            <SettingsIcon />
          </Button>
        </RouterLink>
        <Select v-model:model-value="sort">
          <SelectTrigger class="w-16">
            <SelectValue>
              <SlidersHorizontalIcon :size="18" />
            </SelectValue>
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="ascending">
              <div class="flex items-center gap-4">
                <AArrowUpIcon :size="16" />
                <span>Ascending</span>
              </div>
            </SelectItem>
            <SelectItem value="descending">
              <div class="flex items-center gap-4">
                <AArrowDownIcon :size="16" />
                <span>Descending</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <Separator class="mx-4 shadow-sm" />
    <ScrollArea class="h-full overflow-auto px-4" style="contain: size">
      <ul
        class="faded-bottom no-scrollbar grid gap-4 overflow-auto pt-4 pb-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <RouterLink v-for="app in filteredApps" :key="app.name" :to="app.path">
          <Card class="h-full cursor-pointer hover:shadow-md">
            <CardHeader>
              <CardTitle>{{ app.meta?.title }}</CardTitle>
              <CardDescription>{{ app.meta?.desc }}</CardDescription>
            </CardHeader>
            <CardContent class="flex-1"></CardContent>
            <CardFooter class="justify-between text-sm text-gray-600">
              <span>2025-03-27</span>
              <span>zbx</span>
              <span>69</span>
            </CardFooter>
          </Card>
        </RouterLink>
        <li v-if="filteredApps.length === 0">
          <span class="text-gray-500">无数据</span>
        </li>
      </ul>
    </ScrollArea>
  </div>
</template>
