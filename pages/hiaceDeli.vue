ー<template>
    <v-app id="app">
        <div class="text-center">
            <v-row justify="center">
                <v-col>
                <!-- <v-col v-for="item, index in todayWeekday" :key= "index"> -->
                    <v-card-title>ハイエース</v-card-title>
                        <!-- <v-btn @click="dialogSwitch(item.key)"> -->
                            <!-- {[item.shopName]}
                        </v-btn> -->
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A')"
                        >
                            DS茅ヶ崎
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('B')"
                        >
                            DS戸塚
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS桜木町
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DSみなとみらい
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS横浜ポルタ
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS大宮
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS新都心
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS浦和
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS大井町
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS八重洲
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS赤坂
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            MN赤坂
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS新宿サブナード
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS新宿ハルク
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('C')"
                        >
                            DS中野
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
                        <v-btn color="blue darken-1" text @click="dialog = false">閉じる</v-btn>
                        <v-btn color="blue darken-1" text @click="submit">送信</v-btn>
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
  var today = new Date();
  console.log(today.getFullYear() + "/" + (today.getMonth() + 1) + "/" +today.getDate());
  var todayDate = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" +today.getDate()
  const stores = {
      "DS茅ヶ崎" : ,
      "DS戸塚" : ,
  }

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
        // todayRoute:[],

        // todayWeekday: "",

        // shopList: {
        //     Thu:[{shopName:"DS茅ヶ崎"},{shopName:"DS戸塚"},{shopName:"DS桜木町"},{shopName:"DSみなとみらい"},{shopName:"DS横浜ポルタ"},{shopName:"DS大宮"},{shopName:"DS新都心"},{shopName:"DS浦和"}]
        // }
      }
    },
    methods: {
        dialogSwitch (shopName) {
            this.dialog= true
        },
        async submit () {
            //deliValues宣言
            var deliValues = {blue: this.inputDeli.blueDeli.count, orange: this.inputDeli.orangeDeli.count, red: this.inputDeli.redDeli.count, green: this.inputDeli.greenDeli.count}
            console.log(deliValues)

            //pickValues宣言
            var pickValues = {blue: this.inputPick.bluePick.number, other: this.inputPick.otherPick.number}
            console.log(pickValues)

            const db = firebase.firestore()
            let dbDeliverys = await db.collection('deliverys').doc('J1sBuYY43uk9wFRQRhEw')
             .update({
                 distribute: deliValues,
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

            const querySnapshot = await db.collection('deliverys').where("id", "==", "J1sBuYY43uk9wFRQRhEw").get()
            querySnapshot.forEach((doc) => {
                var id = doc["shopId"]

                if(this.deliverys[shopId] != undefined) {
                    this.deliverys[shopId] = doc
                }

                console.log(id)
                console.log(doc.id)
                console.log(doc.data().deliverys)
                var deliverysNumber = doc.data().deliverys
                for(var key in this.input){
                    this.input[key].count = deliverysNumber[key]
                }
            }) 
        },    
    },
    mounted(){
        this.conf()
        // var dayOfWeek = today.getDay();
        // var todayWeekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ][dayOfWeek];
        // console.log(todayWeekday)
        // this.todayRoute = this.shopList[todayWeekday]
    }
}
</script>

