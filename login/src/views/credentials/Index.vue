<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm15 md6>
            <v-img src="../../assets/logo2.png" />

        </v-flex>
      </v-layout>
      <v-layout align-center justify-start>
        <v-flex xs12 sm15 md10>
          <v-card flat>
            <v-row>
              <v-col>
                <v-text-field  clearable outlined class="mt-2" label="Usuário" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field  clearable outlined label="Senha" type="password" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                  color="primary"
                  plain
                  to="/esqueceu-senha"
                >
                  Esqueceu sua senha?
                </v-btn>
                <v-btn
                  color="primary">
                  Acessar
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
