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
                            店舗A
                        </v-btn>
                    </template>
                    <v-card>
                    <v-card-title>
                        <span class="headline">納品・回収数</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                               cols="12"
                               sm="6"
                               v-for='(item,index) in input' :key=index
                            >
                                <v-text-field
                                    :label=item.label
                                    v-model=item.count
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
                        <v-btn
                         text
                         v-on:click="Conf">確認</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </div>
    </v-app>
</template>

<script>
  import firebase from "../plugins/firebase"
  export default {
    data () {
      return {
        dialog: false,
        bluenumber: 0,
        input: [
        { label: "青納品数", count: 0 },
        { label: "オレンジ納品数", count: 0 },
        { label: "赤納品数", count: 0 },
        { label: "緑納品数", count: 0 },
      ],
      }
    },
    methods: {
        async submit () {
            const db = firebase.firestore()
            let dbDeliverys = await db.collection('deliverys').doc('J1sBuYY43uk9wFRQRhEw')
             .set({
                 deliveryBlue: this.bluenumber,
             })
             .then(()=>{ return true }).catch(function (err) {
                console.log(err)
                return false

            });
            if (dbDeliverys){alert("更新完了")}else {alert("更新失敗")}
        },
        async Conf({ commit }) {
            const db = firebase.firestore()
            const deliverys = []
            const querySnapshot = await db.collection('deliverys').get()

            querySnapshot.forEach((doc) => {
                deliverys.push({
                    id: doc.J1sBuYY43uk9wFRQRhEw, // ドキュメントID
                    ...doc.data()
                })
            })
            const deliverysInfo = []
            for (let i = 0; i < deliverys.length; i++) {
                const deliveryInfo = deliverys[i]
                deliverysInfo.push(deliveryInfo)
            }
            commit('describe', { defaultInfo: deliverysInfo })
        }
        // conf () {
        //     const db = firebase.firestore()
        //     db.collection('deliverys')
        //      .get()
        //      .then((querySnapshot) => {
        //          querySnapshot.forEach((doc) => {
        //              console.log(doc.deliveryBlue())
        //          })
        //      })
        // },
    },
}
</script>
