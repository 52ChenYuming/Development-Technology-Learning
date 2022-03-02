import { createPinia } from "pinia";
import  PiniaPluginPersist  from "pinia-plugin-persistedstate"


const store = createPinia()
store.use(PiniaPluginPersist)


export default store