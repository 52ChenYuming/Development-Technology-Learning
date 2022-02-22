import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.css'
import { Button, NavBar, Icon, Form, Field, CellGroup, Cell, Popup  } from 'vant';

const app = createApp(App)

app.use(Button).use(NavBar).use(Icon).use(Form).use(Field).use(CellGroup).use(Cell).use(Popup)

app.use(store)
app.use(router)
app.mount('#app')
