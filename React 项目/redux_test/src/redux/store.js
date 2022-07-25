/* 
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore，专门用于创建redux中最核心的store对象
import { createStore } from "redux";
// 引入为Count组件服务的ruducer
import countReducer from './count_reducer'

const store = createStore(countReducer)

export default store
