import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import Vue from 'vue'
import { required, email, integer, between } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', required)
extend('email', email)
extend('integer', integer)
extend('between', between)
