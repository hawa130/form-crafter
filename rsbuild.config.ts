import { SemiRspackPlugin } from '@douyinfe/semi-rspack-plugin'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass({
      sassLoaderOptions: {
        sassOptions: {
          silenceDeprecations: ['import', 'global-builtin'],
        },
      },
    }),
  ],
  html: {
    title: '表单编辑器 Form Crafter',
    meta: {
      description: '一款简单的表单编辑器',
    },
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack(), new SemiRspackPlugin({ cssLayer: true })],
    },
  },
})
