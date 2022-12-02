<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm15 md6>
            <v-img src="../../assets/logo2.png" />

        </v-flex>
      </v-layout>
      <v-layout align-center justify-center>
        <v-flex xs12 sm15 md10>
          <ValidationObserver ref="observer">
            <v-card elevation="12" max-width="500" max-height="600">
              <v-row class="d-flex justify-center">
                <v-col cols="10" class="pb-0 pt-3">
                    <ValidationProvider name="e-mail" rules="required|email" v-slot="{ errors }">
                      <v-text-field v-model="credentials.email" clearable outlined class="mt-2 " label="E-mail*" :error-messages="errors" />
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col cols="10" class="pb-0 pt-0">
                    <ValidationProvider name="senha" rules="required" v-slot="{ errors }">
                      <v-text-field v-model="credentials.password" clearable outlined label="Senha" type="password" :error-messages="errors" />
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col class="pb-0 pt-0" cols="10">
                    <v-btn
                    @click="login()"
                    block
                    color="primary">
                    Acessar
                  </v-btn>
                </v-col>
                <v-col class="pb-0 pt-0 d-flex justify-center" cols="10">
                  <v-btn
                    color="primary"
                    plain
                    @click="openForgotpassword = true"
                  >
                    Esqueceu sua senha?
                  </v-btn>
                </v-col>
              </v-row>
              <v-divider class="mt-3"></v-divider>
              <v-row class="d-flex justify-center">
                <v-col cols="10" class="d-flex justify-center mt-3">
                  <v-btn @click="openCreateAccount = true" color="green" class="white--text">
                    Criar novo usuário
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </ValidationObserver>
        </v-flex>
      </v-layout>
    </v-container>
    <CreateAccount @close="closeCreateAccount()" :show="openCreateAccount"/>
    <ForgotPassword @close="closeForgotAccount()" :show="openForgotpassword"/>
  </v-app>
</template>

<script>
import CreateAccount from '../create_account/Index.vue'
import ForgotPassword from '../forgot_password/Index.vue'

export default {
  name: 'Authentication',

  components: {
    CreateAccount,
    ForgotPassword
  },

  methods: {
    closeCreateAccount () {
      this.openCreateAccount = false
    },

    closeForgotAccount () {
      this.openForgotpassword = false
    },

    async login () {
      const resp = await this.$refs.observer.validate()

      if (!resp) return false
    }
  },

  data: () => ({
    openCreateAccount: false,
    openForgotpassword: false,
    credentials: {}
  })
}
</script>

<style>

</style>
