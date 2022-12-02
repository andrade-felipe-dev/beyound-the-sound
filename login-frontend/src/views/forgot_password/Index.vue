<template>
  <v-dialog max-width="500" height="700" v-model="dialog" persistent>
    <v-card>
        <v-card-title class="ml-3 mr-2 pa-1">
          <span class="text-h5">Recuperar usuário</span>
          <v-spacer></v-spacer>
          <v-icon @click="close()">mdi-window-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-1">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="12"
                class="pb-0"
              >
                <v-text-field
                  label="E-mail*"
                  outlined
                  clearable
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-0 pt-2 pb-2">
          <v-btn
            color="blue darken-1"
            text
            class="white--text ml-5"
            @click="close()"
          >
          Fechar
        </v-btn>
        <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            class="white--text mr-5"
            @click="save()"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    dialog: false
  }),

  watch: {
    show () {
      this.dialog = this.show
    }
  },

  methods: {
    close () {
      this.$emit('close')
      this.dialog = false
    },

    save () {
      this.close()
    }
  }

}
</script>

<style>

</style>
