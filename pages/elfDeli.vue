<template>
    <v-app id="app">
        <div class="text-center">
            <v-row justify="center">
                <v-col>
                    <v-card-title>エルフ</v-card-title>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A016')"
                        >
                            DS町田
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A017')"
                        >
                            KF町田
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A018')"
                        >
                            DS相模大野
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A019')"
                        >
                            MRセンター南
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A020')"
                        >
                            DS渋谷宮益坂
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A021')"
                        >
                            DS渋谷マーク
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A022')"
                        >
                            MN渋谷
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A023')"
                        >
                            DS溝の口
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A024')"
                        >
                            DS幡ヶ谷
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A025')"
                        >
                            DS秋津
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A026')"
                        >
                            DS所沢
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A027')"
                        >
                            DS川越
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A028')"
                        >
                            MR川越
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A029')"
                        >
                            DS聖蹟桜ヶ丘
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A030')"
                        >
                            KF聖蹟桜ヶ丘
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A031')"
                        >
                            KF新百合ヶ丘
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A032')"
                        >
                            DS新百合ヶ丘
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A033')"
                        >
                            DS三鷹
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A034')"
                        >
                            DS南大沢
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A035')"
                        >
                            KF南大沢
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A036')"
                        >
                            MR北野
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A037')"
                        >
                            DS八王子
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A038')"
                        >
                            DS昭島
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A039')"
                        >
                            DS立川
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A040')"
                        >
                            DS国立
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A041')"
                        >
                            DS府中
                        </v-btn>
                        <br>
                        <v-btn
                            block
                            x-large
                            color="primary"
                            dark
                            @click="dialogSwitch('A042')"
                        >
                            DS国分寺
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

  function Settoday () {
      var weekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
      document.getElementById(weekday[today.getDay()]).style.display="block";
  }

  export default {
    data () {
      return {
        dialog: false,
        //納品の連想配列
        inputDeli: {
        blueDeli:{ label: "青納品数", count: 0 },
        orangeDeli:{ label: "オレンジ納品数", count: 0 },
        whiteDeli:{ label: "白納品数", count: 0 },
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
            this.dialog= true
        },
        async submit () {
            //deliValues宣言
            var deliValues = {blue: this.inputDeli.blueDeli.count, orange: this.inputDeli.orangeDeli.count, white: this.inputDeli.whiteDeli.count, green: this.inputDeli.greenDeli.count}
            console.log(deliValues)

            //pickValues宣言
            var pickValues = {blue: this.inputPick.bluePick.number, other: this.inputPick.otherPick.number}
            console.log(pickValues)

            const db = firebase.firestore()
            let dbDeliverys = await db.collection('deliverys').doc('6v1Gr224NHzppF36319B')
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

            const querySnapshot = await db.collection('deliverys').where("id", "==", "6v1Gr224NHzppF36319B").get()
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
    }
}
</script>

