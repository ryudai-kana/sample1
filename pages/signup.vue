<template>
  <div>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>新規登録</v-toolbar-title>
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
                <v-text-field
                  v-model="username"
                  :counter="32"
                  label="username"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-on:click="signUp"
              >登録</v-btn>
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
import firebase from 'firebase'
 
export default {
    data () {
        return {
            email: '',
            password: '',
            username: '',
            show_password: false,
        }
    },
    methods: {
        signUp: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((result) => {
                result.user.updateProfile({
                    displayName:this.username
                });
                alert('アカウントを作成しました')
                this.$router.push('/')
            })
            .catch(error => {
                alert(error.message)
            })
            const db = firebase.firestore()
            let dbUsers = db.collection('users')
             .add({
                 UserName: this.username,
                 Email: this.email,
                 Password: this.password,
             })
             .then(()=>{ return true }).catch(function (err) {
                console.log(err)
                return false

            });
            if (dbUsers){alert("更新完了")}else {alert("更新失敗")}
        }
    }
}
</script>
