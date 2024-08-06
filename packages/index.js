
import tempPc from './temp-pc/tempPc.vue'

//按需导出用于按需引入
export { tempPc }

const components = [tempPc]

const install = (app) => {
  components.forEach((item) => {
    console.log(item)
    app.component(item.__name, item)
  })
}

export default {
  install
}
