# JSX 
React 独创的 JSX语法， 当编译遇到 < > 时会将其当做 html 解析，遇到 { } 会将其当做js解析 

# 单向数据流
子组件不能修改父组件中的数据（react和vue都是，vue中只有v-model是双向数据流）

# 数据校验
import PropTypes from 'prop-types';
List.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
可以校验数据类型

# 函数式编程有什么好处呢
