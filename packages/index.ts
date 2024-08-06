import { App } from 'vue'
import tempPc from './temp-pc/temp-pc.vue'

//按需导出用于按需引入
export { tempPc }

const components = [tempPc]

const install = (app: App) => {
  components.forEach((item) => {
    console.log(item)
    app.component(item.__name as string, item)
  })
}

export default {
  install
}
