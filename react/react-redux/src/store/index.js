import { createStore } from "redux";
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//配置调试工具

export default store

// 厂库
// 记事本（有管理能力）