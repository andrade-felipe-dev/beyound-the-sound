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
          <v-card elevation="12" max-width="500" max-height="600">
            <v-row class="d-flex justify-center">
              <v-col cols="10" class="pb-0 pt-3">
                <v-text-field clearable outlined class="mt-2 " label="Usuário" />
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="10" class="pb-0 pt-0">
                <v-text-field  clearable outlined label="Senha" type="password" />
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col class="pb-0 pt-0" cols="10">
                <v-btn
                  block
                  color="primary">
                  Acessar
                </v-btn>
              </v-col>
              <v-col class="pb-0 pt-0 d-flex justify-center" cols="10">
                <v-btn
                  color="primary"
                  plain
                  to="/esqueceu-senha"
                >
                  Esqueceu sua senha?
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="mt-3"></v-divider>
            <v-row class="d-flex justify-center mt-3">
              <v-col cols="10" class="d-flex justify-center mt-3">
                <v-btn color="green" class="white--text">
                  Criar novo usuário
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Authentication',

  methods: {

  }
}
</script>

<style>

</style>
