<template>
    <v-app id="app">
        <div class="text-center">
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600 px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            Open Dialog
                        </v-btn>
                    </template>
                    <v-card>
                    <v-card-title>
                        <span class="headline">納品・回収数</span>
                    </v-card-title>
                    <v-title>納品</v-title>
                    <v-card>青納品数</v-card>
                    <v-text-field label="数"></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </div>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
