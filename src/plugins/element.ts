import { ElButton, ElPopper, ElInput } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'
// import 'element-plus/lib/theme-chalk/index.css'
export default (app: any) => {
  app.use(ElButton)
  app.use(ElPopper)
  app.use(ElInput)
}
