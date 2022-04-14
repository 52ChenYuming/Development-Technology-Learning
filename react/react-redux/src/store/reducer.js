const defaultState = { // 默认数据
  inputVal: 'write something',
  list: [
    '夜视仪警告！vivo X80 曝全系天玑 9000 + 自研影像芯片',
    '商业日报｜微博注册多项微博电商商标；星巴克回应顾客喝出咖啡机零件',
    '联通5G VoNR具备商用条件，你还不准备换5G手机'
  ]

}

// state原始厂库里的状态， action指的是store推送过来的新的状态
export default (state = defaultState, action) => {
  // console.log(state);
  if (action.type === 'change_input_value') {
    // state.inputVal = action.value     reducer中不能修改state
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.value
    return newState
  }
  return state
}