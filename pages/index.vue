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
              <v-form name="form1">
                <v-text-field
                  name="Email"
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
        var address = document.form1.Email.value;
        var loginBool = firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {return user})
        .catch(err => {return false})

        if(loginBool){
          switch(address) {
            case "b@test.com":
              this.$router.push("/hiaceDeli");
              break;
            case "1@test.com":
              this.$router.push("/elfDeli");
              break;
            case "test@test.com":
              this.$router.push("/dynaDeli");
              break;
          }
        } else {
          console.log("ログインできませんでした");
        }         
    },
  }
}
</script>
