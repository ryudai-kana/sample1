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
              <v-btn
                flat
                v-on:click="gotoSignup"
              >SIGNUP</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                v-on:click="doLogin"
              >LOGIN</v-btn>
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
      console.log('login')
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.push("/")
          }).catch((error) => {
            alert(error)
          })
    },
    gotoSignup() {
      this.$router.push("/signup")
    },
    gotoResetPassword() {
      this.$router.push("/reset-password")
    }
  }
}
</script>
