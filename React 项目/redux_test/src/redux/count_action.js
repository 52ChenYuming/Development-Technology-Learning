/* 
  该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant"
import store from "./store"
export const createIncreamentAction = data => {
  return { type: INCREMENT, data }
}
export const createDecreamentAction = data => {
  return { type: DECREMENT, data }
}
// 所谓异步action，就是指的action的值为函数
export const createIncreamentAsynAction = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createIncreamentAction(data))
    }, time)
  }
}