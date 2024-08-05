import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import UnpluginLegacy from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginLegacy(),
  ],
})
