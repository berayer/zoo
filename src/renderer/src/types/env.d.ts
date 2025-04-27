/// <reference types="vite/client" />

import type { Component } from 'vue'
// typings.d.ts 或 router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: Component
    desc?: string
  }
}
