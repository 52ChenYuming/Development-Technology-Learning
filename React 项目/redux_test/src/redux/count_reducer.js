/* 
  1. 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
  2. reducer函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)
*/

const initState = 0 //初始化状态

function countReducer(preState = initState, action) {

  // 从action对象中获取：type、data
  const { type, data } = action
  switch (type) {
    case 'increment': // 如果是+
      console.log(preState);
      return preState + data
    case 'decrement': // 如果是-
      return preState - data
    default:
      return preState
  }

}

export default countReducer