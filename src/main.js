import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar, setCssVar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

setCssVar('primary', '#ff8b17')
createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
