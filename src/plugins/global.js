import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import EsButton from '~/components/integration/atoms/es-button.vue'
import BackButton from '~/components/integration/atoms/back-button.vue'

Vue.use(VueScrollTo)
Vue.component('EsButton', EsButton)
Vue.component('BackButton', BackButton)