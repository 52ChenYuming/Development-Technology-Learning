import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.css'
import { Button, NavBar, Icon, Form, Field, CellGroup, Cell, Popup, DatetimePicker, List, PullRefresh, NumberKeyboard, TabbarItem, Tabbar } from 'vant';
import dayjs from 'dayjs'
const app = createApp(App)

app.use(Button).use(NavBar).use(Icon).use(Form).use(Field).use(CellGroup).use(Cell).use(Popup).use(DatetimePicker).use(List).use(PullRefresh).use(NumberKeyboard).use(TabbarItem).use(Tabbar)

app.config.globalProperties.$filters = {
  transTime(data) {
    return dayjs(Number(data)).format('HH:mm')
  },
  transDay(value) {
    return dayjs(value).format('MM-DD')
  },
  transYDM(value) {
    return dayjs(value).format('YYYY-MM-DD HH:mm')
  }
}

app.use(store)
app.use(router)
app.mount('#app')
