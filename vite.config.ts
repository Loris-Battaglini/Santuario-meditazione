import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

let outputDirectory = ''

const githubPagesFallback: Plugin = {
  name: 'github-pages-fallback',
  apply: 'build',
  configResolved(config) {
    outputDirectory = resolve(config.root, config.build.outDir)
  },
  closeBundle() {
    copyFileSync(
      resolve(outputDirectory, 'index.html'),
      resolve(outputDirectory, '404.html'),
    )
  },
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Santuario-meditazione/' : '/',
  plugins: [react(), githubPagesFallback],
}))
