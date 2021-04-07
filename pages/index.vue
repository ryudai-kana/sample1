<template>
  <div>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  :counter="32"
                  label="email"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :type="show_password ? 'text' : 'password'"
                  :counter="32"
                  label="password"
                  @click:append="show_password = !show_password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-flex xs12 sm15 md15 text-center my-5>
              <v-btn
                align-center
                v-on:click="doLogin"
              >LOGIN</v-btn>
              </v-flex>
            </v-card-actions>
            <hr>
            <v-spacer></v-spacer>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: '',
      password: '',
      show_password: false,
    }
  },
  
  methods: {
    doLogin() {

          if (this.email = "b@test.com") {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
            this.$router.push("/input")
            }).catch((error) => {
              alert(error)
            })
          } else if (this.email = "1@test.com") {
             firebase.auth().signInWithEmailAndPassword(this.email, this.password)
             .then(user => {
             this.$router.push("/input2")
             }).catch((error) => {
               alert(error)
             })
          }
          
    },
    gotoSignup() {
      this.$router.push("/signup")
    },
  }
}
</script>
