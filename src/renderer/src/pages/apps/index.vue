<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { AArrowUpIcon, AArrowDownIcon, SlidersHorizontalIcon, SettingsIcon } from 'lucide-vue-next'
import { apps } from '.'
import type { AppsType } from '.'
import { ref, watch } from 'vue'
import { ScrollArea } from '@/components/ui/scroll-area'

const appText = new Map<string, string>([
  ['all', 'All Apps'],
  ['connected', 'Connected'],
  ['notConnected', 'Not Connected'],
])

const sort = ref('ascending')
const appType = ref('all')
const searchTerm = ref('')

const filteredApps = ref<AppsType>(apps)

function handleFilter(): void {
  filteredApps.value = apps
    .sort((a, b) => (sort.value === 'ascending' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
    .filter((app) =>
      appType.value === 'connected' ? app.connected : appType.value === 'notConnected' ? !app.connected : true,
    )
    .filter((app) => app.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
}

watch(
  () => [sort.value, appType.value],
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
        <Select v-model:model-value="appType">
          <SelectTrigger class="w-36">
            <SelectValue>{{ appText.get(appType) }}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Apps</SelectItem>
            <SelectItem value="connected">Connected</SelectItem>
            <SelectItem value="notConnected">Not Connected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div class="flex gap-2">
        <RouterLink to="/settings"
          ><Button variant="ghost" size="icon"><SettingsIcon /></Button
        ></RouterLink>
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
      <ul class="faded-bottom no-scrollbar grid gap-4 overflow-auto pt-4 pb-16 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="app in filteredApps" :key="app.name" class="rounded-lg border p-4 hover:shadow-md">
          <div class="mb-8 flex items-center justify-between">
            <div :class="`bg-muted flex size-10 items-center justify-center rounded-lg p-2`">
              <component :is="app.logo"></component>
            </div>
            <Button
              variant="outline"
              size="sm"
              :class="`${app.connected ? 'border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900' : ''}`"
            >
              {{ app.connected ? 'Connected' : 'Connect' }}
            </Button>
          </div>
          <div>
            <h2 class="mb-1 font-semibold">{{ app.name }}</h2>
            <p class="line-clamp-2 text-gray-500">{{ app.desc }}</p>
          </div>
        </li>
        <li v-if="filteredApps.length === 0">
          <span class="text-gray-500">无数据</span>
        </li>
      </ul>
    </ScrollArea>
  </div>
</template>
