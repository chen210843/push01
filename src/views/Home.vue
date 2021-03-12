<template>
  <v-container >
    <v-form @submit.prevent="addData">
      <v-row>
      <v-text-field v-model="txt" label="firstName" class="ma-2"></v-text-field>
      |
       <v-text-field v-model="lastname" label="lastName" class="ma-2"></v-text-field>
       </v-row>
       <v-row>
       <v-text-field v-model="email" label="Gmail" class="ma-2"></v-text-field>
        |
        <v-text-field
          v-model="phonenumber"
          :counter="10"
          label="Phone Number"
          required
        ></v-text-field>
      </v-row>
      <v-text-field v-model="address" label="address" class="ma-2"></v-text-field>
      <v-btn   color="blue"  @click="addData">Submit</v-btn>
      <v-btn   color="red"  @click="reset"> Reset Form </v-btn>
    </v-form>
    <br>
    <push />
    
  </v-container>
</template>

<script>

import firebase from 'firebase/app'
import { db } from '@/plugins/firebaseConfig.js'
import push from '../components/push.vue'
export default {
  components: {
    push,
   
  },
  data() {
    return {
      txt: '',
      lastname: '',
      email: '',
      phonenumber: '',
      address: '',
      
    }
  },
 
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
        txt:this.txt,
        lastname:this.lastname,
        email:this.email,
        phonenumber:this.phonenumber,
        address:this.address,
      }
      db.collection('MyForm')
        .doc('formdata')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        txt:this.txt,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('MyText')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {},
  },
}
</script>

<style></style>
