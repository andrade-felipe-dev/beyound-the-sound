import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import Vue from 'vue'
import { required, email } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: (field) => `O campo ${field} é obrigatório.`
})

extend('email', {
  ...email,
  message: () => 'Digite um e-mail válido.'
})
