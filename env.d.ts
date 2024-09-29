/// <reference types="vite/client" />
import 'vue'

declare module 'vue' {
  interface AppConfig {
    devtools?: boolean
  }
}
