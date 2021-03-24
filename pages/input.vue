<template>
    <v-app id="app">
        <div class="text-center">
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
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
                    <v-card-text>
                    <v-container>
                        <v-row>
                            <v-card-title>
                                納品
                            </v-card-title>
                            <v-card>
                                青納品数
                            </v-card>
                            <v-col cols="1" sm="1" md="1">
                                <v-text-field label="数" required></v-text-field>
                            </v-col>
                            <v-card>
                                オレンジ納品数
                            </v-card>
                            <v-col cols="1" sm="1" md="1">
                                <v-text-field label="数" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>
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
