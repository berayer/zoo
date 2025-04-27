<script setup lang="ts">
import { ref } from 'vue'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import type { ColumnDef } from '@tanstack/vue-table'

interface DirType {
  id: string
  name: string
  type: string
}

const data = ref<DirType[]>([
  {
    id: '1',
    name: '主卧衣柜',
    type: 'model',
  },
])
const columns: ColumnDef<DirType>[] = [
  {
    accessorKey: 'name',
    header: '名称',
  },
  {
    accessorKey: 'type',
    header: '类型',
  },
]

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id" class="border-none">
        <TableHead v-for="header in headerGroup.headers" :key="header.id">
          <FlexRender
            v-if="!header.isPlaceholder"
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <template v-if="table.getRowModel().rows.length">
        <template v-for="row in table.getRowModel().rows" :key="row.id">
          <TableRow>
            <TableCell v-for="cell in row._getAllVisibleCells()" :key="cell.id">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
      </template>
      <TableRow v-else>
        <TableCell :colspan="columns.length" class="h-24 text-center">无数据</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
