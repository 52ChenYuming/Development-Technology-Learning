import React, { Component, Fragment } from 'react'
import List from '../src/components/list';
import './style.css'
class App extends Component {
  constructor(props) {
    super(props)
    // 这里数据源必须要写state
    this.state = {
      inputVal: '',
      list: ['吃饭', '睡觉']
    }
  }

  inputChange(e) {
    console.log(this);
    this.setState({
      inputVal: e.target.value
    })
  }

  addList() {
    this.setState({ // setState 类似于 Vue3 中的 reactive，将数据变成响应式的
      list: [...this.state.list, this.state.inputVal]
    })
  }

  deleteItem(index) {
    // react 不建议直接操作数据源，但是这里先这么写
    this.state.list.splice(index, 1)
    this.setState({
      list: this.state.list
    })
  }

  componentWillMount() {
    console.log('componentWillUnmount----组件将要被挂载');
  }

  componentDidMount() {
    console.log('componentDidMount----组件已经被挂载');
  }

  render() {
    // console.log('组件挂载中');
    // return 中必须具备一个最外层的容器包裹, 可以将外面写一个Fragment，它不会被渲染成实体标签
    return (
      <Fragment>
        <div> {/* 不能直接写class 要写成className ,怕和上面的class混淆*/}
          <label htmlFor='date'>项目：</label> {/*这里写了for 会被误以为是要写for循环，所以会报错，解决方案是要写成htmlor*/}
          <input
            id='date'
            className='input'
            value={this.state.inputVal}
            onChange={this.inputChange.bind(this)}
          /> {/* Vue中双向数据绑定是用v-model，这里是用value直接绑定到数据源（input中本来就有value这个属性，这个属性就是input框中的值）,但是这里是单向绑定，state数据源中数据会传送到输入框中，但是你修改input框中的值，数据源中的值不会变化, 要注意在这里调用inputChange这个函数，this的指向会改变，就不指向App了，所以我们要bind绑定让this仍然指向App */}
          <button onClick={this.addList.bind(this)}>添加</button>
        </div>

        <ul>
          {
            this.state.list.map((item, index) => {
              return ( // return要换行必须要加个小括号
                <List
                  key={index}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                  name={'cym'}

                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default App