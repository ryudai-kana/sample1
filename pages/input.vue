<template>
    <v-app id="app">
        <div class="text-center">
            <v-row justify="center">
                <v-col>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A')"
                        >
                            店舗A
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('B')"
                        >
                            店舗B
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            店舗C
                        </v-btn>
                <v-dialog v-model="dialog" persistent max-width="600 px">
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
                               v-for='(item,key) in inputDeli' :key=key
                            >
                                <v-text-field
                                    :label=item.label
                                    v-model=item.count
                                ></v-text-field>
                            </v-col>
                            <v-col
                               cols="12"
                               sm="6"
                               v-for='(item,key) in inputPick' :key=key
                            >
                                <v-text-field
                                    :label=item.label
                                    v-model=item.number
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
                        <!-- <v-btn color="blue darken-1" text @click="conf">確認</v-btn> -->
                    </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-col>
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
        //納品の連想配列
        inputDeli: {
        blueDeli:{ label: "青納品数", count: 0 },
        orangeDeli:{ label: "オレンジ納品数", count: 0 },
        redDeli:{ label: "赤納品数", count: 0 },
        greenDeli:{ label: "緑納品数", count: 0 },
        },
        //回収の連想配列
        inputPick: {
        bluePick:{ label: "青回収数", number: 0 },
        otherPick:{ label: "その他回収数", number: 0 },
        },

      }
    },
    methods: {
        dialogSwitch (shopName) {
            console.log(shopName)
            this.dialog= true
        },
        async submit () {
            //日時取得
            var today = new Date();
            console.log(today.getFullYear() + "/" + (today.getMonth() + 1) + "/" +today.getDate());
            var todayDate = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" +today.getDate()

            //setValues宣言
            var setValues = {blue: this.inputDeli.blueDeli.count, orange: this.inputDeli.orangeDeli.count, red: this.inputDeli.redDeli.count, green: this.inputDeli.greenDeli.count}
            console.log(setValues)

            //pickValues宣言
            var pickValues = {blue: this.inputPick.bluePick.number, other: this.inputPick.otherPick.number}
            console.log(pickValues)

            const db = firebase.firestore()
            let dbDeliverys = await db.collection('deliverys').doc('J1sBuYY43uk9wFRQRhEw')
             .update({
                 deliverys: setValues,
                 date: todayDate,
                 pickups: pickValues,
             })
             .then(()=>{ return true }).catch(function (err) {
                console.log(err)
                return false

            });
            if (dbDeliverys){alert("更新完了")}else {alert("更新失敗")}
        },
        async conf () {
            const db = firebase.firestore()
            // const deliverys = []
            const querySnapshot = await db.collection('deliverys').where("id", "==", "$a2ZRNk#mun9RPr3").get()

            querySnapshot.forEach((doc) => {
                console.log(doc.id)
                console.log(doc.data().deliverys)
                var deliverysNumber = doc.data().deliverys
                for(var key in this.input){
                    this.input[key].count = deliverysNumber[key]
                }
            })
        }
    },
    mounted(){
        this.conf()
    }
}
</script>
