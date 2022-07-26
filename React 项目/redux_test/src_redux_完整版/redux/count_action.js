/* 
  该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant"
export const createIncreamentAction = data => {
  return { type: 'INCREMENT', data }
}
export const createDecreamentAction = data => {
  return { type: 'DECREMENT', data }
}