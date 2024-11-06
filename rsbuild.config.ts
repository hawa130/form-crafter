import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: '表单编辑器 Form Crafter',
    meta: {
      description: '一款简单的表单编辑器',
    },
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
})
