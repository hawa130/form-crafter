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
    title: '问卷通',
    meta: {
      description: '一款简单的问卷创建工具',
    },
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack(), new SemiRspackPlugin({ cssLayer: true })],
    },
  },
})
