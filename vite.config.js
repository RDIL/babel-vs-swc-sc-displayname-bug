import {defineConfig} from 'vite'
import reactBabel from '@vitejs/plugin-react'
import reactSwc from '@vitejs/plugin-react-swc'

const useSwc = process.env.BUILDER === 'swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: useSwc
    ? [
      reactSwc({
        plugins: [
          ["@swc/plugin-styled-components", {
            ssr: true,
            displayName: true,
          }]
        ]
      })
    ]
    : [
      reactBabel({
        babel: {
          plugins: [
            ["babel-plugin-styled-components", {
              ssr: true,
              displayName: true,
            }]
          ]
        },
      })
    ]
})
