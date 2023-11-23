import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import PrimeVue from 'primevue/config'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/'
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
